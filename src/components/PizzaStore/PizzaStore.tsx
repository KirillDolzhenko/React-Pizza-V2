import { Options } from "../Options/Options";
import { PizzaElement } from "./PizzaElement/PizzaElement";
import { useEffect, useState, createContext, useContext } from "react";
import { IProps } from "./PizzaElement/PizzaElement";
import classNames from "classnames";
import { PizzaElementLoading } from "./PizzaElement/PizzaElementLoading";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { setCurrentPage } from "../../redux/slices/paginationSlice";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import makeUrl from "../../functions/makeUrl";
import { setCategory, setSorting } from "../../redux/slices/categorySlice";
import { setSearch } from "../../redux/slices/searchSlice";
import { arrSort } from "../../functions/objects";
import { fetchPizzas } from "../../redux/slices/pizzasSlice";
import type { AppDispatch } from "../../redux/store";
import type { IItem } from "../../redux/slices/pizzasSlice";

export function PizzaStore() {
  const categorySlice = useSelector((state: RootState) => state.categorySlice);
  const searchSlice: string = useSelector(
    (state: RootState) => state.searchSlice.value
  );
  const paginationNumber: number = useSelector(
    (state: RootState) => state.paginationSlice.number
  );
  const elementsPerPage: number = useSelector(
    (state: RootState) => state.paginationSlice.elementsPerPage
  );
  const currentPage: number = useSelector(
    (state: RootState) => state.paginationSlice.currentPage
  );
  const pizzasArr: IItem[] | null = useSelector(
    (state: RootState) => state.pizzasSlice.items
  );
  const status: string = useSelector(
    (state: RootState) => state.pizzasSlice.status
  );

  const navigate = useNavigate();

  console.log("redux ", currentPage);

  // const [pizzasArr, setPizzasArr] = useState<[] | string>([]);
  // const [loading] = useState<boolean>(true);

  const [initialized, setInitialized] = useState<boolean>(false);
  const [initializing, setInitializing] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!initializing && !initialized) {
      setInitializing(true);

      let objParams = qs.parse(window.location.search.slice(1));

      console.log(objParams);

      for (let i = 0; i < Object.keys(objParams).length; i++) {
        let value = objParams[Object.keys(objParams)[i]];

        switch (Object.keys(objParams)[i]) {
          case "search":
            dispatch(setSearch(String(value)));
            break;
          case "category":
            dispatch(setCategory(Number(value)));
            break;
          case "page":
            dispatch(setCurrentPage(Number(value)));
            break;
          case "sort":
            dispatch(
              setSorting({
                index: Number(value),
                link: arrSort[Number(value)].sort,
              })
            );
            break;
        }
      }

      setInitialized(true);
      setInitializing(false);
    }
  }, [initializing]);

  const fetchData = async () =>
    // category: number,
    // search: string,
    // currentPage: number,
    // elementsPerPage: number,
    // link: string
    {
      dispatch(
        fetchPizzas({
          category: categorySlice.category,
          search: searchSlice,
          currentPage,
          elementsPerPage,
          link: categorySlice.sorting.link,
        })
      );
      navigate(
        `/?${makeUrl({
          category: categorySlice.category,
          page: currentPage,
          search: searchSlice,
          sort: categorySlice.sorting.index,
        })}`
      );

      window.scrollTo(0, 0);
      // try {
      //   const data = await axios.get(
      //     `https://65f744adb4f842e808856702.mockapi.io/pizzas${
      //       categorySlice.category ? `?category=${categorySlice.category}&` : "?"
      //     }${`search=${searchSlice}&`}${
      //       categorySlice.sorting.link
      //     }&page=${currentPage}&limit=${elementsPerPage}`
      //   );
      //   navigate(
      //     `/?${makeUrl({
      //       category: categorySlice.category,
      //       page: currentPage,
      //       search: searchSlice.value,
      //       sort: categorySlice.sorting.index,
      //     })}`
      //   );
      //   setPizzasArr(data.data);
      // } catch {
      //   setPizzasArr("Not found");
      // } finally {
      //   setLoading(false);
      //   window.scrollTo(0, 0);
      // }
    };

  useEffect(() => {
    if (!initializing && initialized) {
      fetchData();
    }
  }, [categorySlice, searchSlice, currentPage, initialized]);

  return (
    <main className="pizzaStore">
      <Options />
      <section className="pizzaOptions">
        <h3>Все пиццы</h3>
        <ul
          className={classNames({
            pizzaOptions__list: true,
            loading: status == "loading",
          })}
        >
          {status == "loading" ? (
            [...new Array(4)].map((_, key) => {
              return <PizzaElementLoading key={key} />;
            })
          ) : pizzasArr ? (
            pizzasArr.map((el: IItem) => <PizzaElement {...el} key={el.id} />)
          ) : (
            <span>Not found</span>
          )}
        </ul>
      </section>
      <div className="pizzaPagination">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={({ selected }) => {
            dispatch(setCurrentPage(selected + 1));
            window.scrollTo(0, 0);
          }}
          initialPage={currentPage - 1}
          forcePage={currentPage - 1}
          pageCount={Math.ceil(paginationNumber / elementsPerPage)} // количество всех страниц, для пагинации
          pageRangeDisplayed={3} // количество элементов возле выбранного
          marginPagesDisplayed={1} // количество элементов после троеточия
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>
    </main>
  );
}
