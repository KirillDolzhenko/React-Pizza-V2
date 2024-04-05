import { memo, useContext, useState } from "react";
import { Option } from "./Option/Option";
import { Sorting } from "./Sorting/Sorting";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { setCategory } from "../../redux/slices/category/slice";
import { setCurrentPage } from "../../redux/slices/pagination/slice";

function OptionsReact() {
  const category = useSelector(
    (state: RootState) => state.categorySlice.category
  );
  const dispatch = useDispatch();

  function changeActiveCategory(id: number) {
    dispatch(setCategory(id));
    dispatch(setCurrentPage(1));
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
      onClick={() => {
        changeActiveCategory(ind);
      }}
      status={category === ind}
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

export const Options = memo(OptionsReact);
