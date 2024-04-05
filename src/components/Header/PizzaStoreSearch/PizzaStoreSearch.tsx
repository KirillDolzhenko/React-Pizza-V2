import classNames from "classnames";
import classes from "./PizzaStoreSearch.module.scss";
import svgSearch from "../../../assets/images/pizzaShop/search/search.svg";
import svgCross from "../../../assets/images/pizzaShop/search/cross.svg";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash.debounce";
import { selectorSearch } from "../../../redux/slices/search/selectors";
import { setSearch } from "../../../redux/slices/search/slice";

export function PizzaStoreSearch() {
  const [value, setValue] = useState<string>("");

  const searchGlobal = useSelector(selectorSearch);

  useEffect(() => {
    setValue(searchGlobal);
  }, [searchGlobal]);

  const setSearchDebounce = useCallback(
    debounce((value) => {
      console.log(value);
      dispatch(setSearch(value));
    }, 400),
    []
  );

  const dispatch = useDispatch();

  return (
    <div className={classes.inputBlock}>
      <button
        className={classNames({
          [classes.button]: true,
          [classes.buttonSearch]: true,
        })}
        onClick={() => {
          dispatch(setSearch(value));
        }}
      >
        <svg>
          <use href={`${svgSearch}#icon`} />
        </svg>
      </button>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setSearchDebounce(e.target.value);
        }}
        className={classes.input}
      />
      <button
        className={classNames({
          [classes.button]: true,
          [classes.buttonClean]: true,
        })}
        onClick={() => {
          dispatch(setSearch(""));
        }}
      >
        <svg>
          <use href={`${svgCross}#icon`} />
        </svg>
      </button>
    </div>
  );
}
