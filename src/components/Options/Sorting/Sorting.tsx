import { useContext, useEffect, useRef, useState } from "react";
import imageArrow from "../../../assets/images/pizzaShop/arrow.svg";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import { setSorting } from "../../../redux/slices/categorySlice";
import { setCurrentPage } from "../../../redux/slices/paginationSlice";
import { arrSort } from "../../../functions/objects";

export function Sorting() {
  const sorting = useSelector(
    (state: RootState) => state.categorySlice.sorting
  );
  const dispatch = useDispatch();

  const [active, toggleActive] = useState<boolean>(false);
  const [activeSorting, setActiveSorting] = useState<string>(
    arrSort[sorting.index].type
  );

  const refMenu = useRef(null);

  function onClickSort(index: number) {
    setActiveSorting(arrSort[index].type);
    dispatch(
      setSorting({
        index: index,
        link: arrSort[index].sort,
      })
    );
    dispatch(setCurrentPage(1));
    toggleActive(false);
  }

  useEffect(() => {
    function bodyListener(e: MouseEvent) {
      if (refMenu.current && !e.composedPath().includes(refMenu.current)) {
        // Проверка клика на область вне поп-апа
        toggleActive(false);
        console.log("CLICK");
      }
    }

    document.body.addEventListener("click", bodyListener);

    return () => {
      document.body.removeEventListener("click", bodyListener);
    };
  }, []);

  useEffect(() => {
    setActiveSorting(arrSort[sorting.index].type);
  }, [sorting]);

  const sortElements = arrSort.map((el, i) => (
    <li
      key={i}
      onClick={() => onClickSort(i)}
      className={i == sorting.index ? "active" : ""}
    >
      {el.type}
    </li>
  ));

  return (
    <div
      className={classNames({
        options__sorting: true,
        active: active,
      })}
    >
      <svg>
        <use xlinkHref={`${imageArrow}#icon`} />
      </svg>

      <span className="options__selected">Сортировка по:</span>

      <span ref={refMenu} className="reffff">
        <span onClick={() => toggleActive(!active)}>{activeSorting}</span>
        <ul>{sortElements}</ul>
      </span>
    </div>
  );
}
