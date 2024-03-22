import { useContext, useState } from "react";
import { Option } from "./Option/Option";
import { Sorting } from "./Sorting/Sorting";
import { ContextStore } from "../PizzaStore/PizzaStore";
import { Context } from "react";

export function Options() {
  const { value, setContext } = useContext(ContextStore);

  function changeActiveCategory(id: number) {
    setContext({
      ...value,
      category: id,
    });
  }

  let arrayOptions = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  let Options = arrayOptions.map((el, ind) => (
    <Option
      key={ind}
      onClick={() => changeActiveCategory(ind)}
      status={value.category === ind}
    >
      {el}
    </Option>
  ));

  return (
    <div className="options">
      <ul className="options__list">{Options}</ul>
      <div className="options__select">
        <Sorting />
      </div>
    </div>
  );
}
