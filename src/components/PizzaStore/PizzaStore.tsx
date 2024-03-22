import { Options } from "../Options/Options";
import { PizzaElement } from "./PizzaElement/PizzaElement";
import { useEffect, useState, createContext } from "react";
import { IProps } from "./PizzaElement/PizzaElement";
import classNames from "classnames";
import { PizzaElementLoading } from "./PizzaElement/PizzaElementLoading";

interface IPizzaStoreContext {
  category: number;
  sorting: number;
}

interface IPizzaStoreUseContext {
  value: IPizzaStoreContext;
  setContext: (value: IPizzaStoreContext) => void;
}

export const ContextStore = createContext<IPizzaStoreUseContext>({
  value: {
    category: 0,
    sorting: 0,
  },
  setContext(value: IPizzaStoreContext) {},
});

export function PizzaStore() {
  const [pizzasState, setPizzasState] = useState<IPizzaStoreContext>({
    category: 0,
    sorting: 0,
  });
  const [pizzasArr, setPizzasArr] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    console.log("fdsdsfdsf");

    let sortingString = "";

    switch (pizzasState.sorting) {
      case 0:
        sortingString = "sortby=rating&order=asc";
        break;
      case 1:
        sortingString = "sortby=price&order=asc";
        break;
      case 2:
        sortingString = "sortby=title&order=asc";
    }

    console.log(sortingString);

    fetch(
      `https://65f744adb4f842e808856702.mockapi.io/pizzas${
        pizzasState.category ? `?category=${pizzasState.category}&` : "?"
      }${sortingString}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        setPizzasArr(response);
        setLoading(false);
        window.scrollTo(0, 0);
      });
  }, [pizzasState]);

  return (
    <ContextStore.Provider
      value={{ value: pizzasState, setContext: setPizzasState }}
    >
      <main className="pizzaStore">
        <Options />
        <section className="pizzaOptions">
          <h3>Все пиццы</h3>
          <ul
            className={classNames({
              pizzaOptions__list: true,
              loading: loading,
            })}
          >
            {loading
              ? [...new Array(8)].map((_, key) => (
                  <PizzaElementLoading key={key}></PizzaElementLoading>
                ))
              : pizzasArr.map((el: IProps) => (
                  <PizzaElement {...el} key={el.id} />
                ))}
          </ul>
        </section>
      </main>
    </ContextStore.Provider>
  );
}

// import React from "react"
// const MyLoader = (props) => (

// )

// export default MyLoader
