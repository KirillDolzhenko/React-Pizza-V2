import { useContext, useState } from "react";
import imageArrow from "../../../assets/images/pizzaShop/arrow.svg";
import classNames from "classnames";
import { ContextStore } from "../../PizzaStore/PizzaStore";

export function Sorting() {
  const { value, setContext } = useContext(ContextStore);

  const arrSort = ["популярности", "цене", "алфавиту"];

  const [active, toggleActive] = useState<boolean>(false);
  const [activeSorting, setActiveSorting] = useState<string>(
    arrSort[value.sorting]
  );

  function onClickSort(index: number) {
    setActiveSorting(arrSort[index]);
    setContext({
      ...value,
      sorting: index,
    });
    toggleActive(false);
  }

  const sortElements = arrSort.map((el, i) => (
    <li
      key={i}
      onClick={() => onClickSort(i)}
      className={i == value.sorting ? "active" : ""}
    >
      {el}
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

      <span>
        <span onClick={() => toggleActive(!active)}>{activeSorting}</span>
        <ul>{sortElements}</ul>
      </span>
    </div>
  );
}
