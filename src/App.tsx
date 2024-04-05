import "./nullstyle.scss";
import "./App.scss";
// import { PizzaStore } from "./components/PizzaStore/PizzaStore";
import { Routes, Route } from "react-router-dom";
import { Suspense, createContext, lazy } from "react";
import { WrapperApp } from "./WrapperApp";

interface IAppContext {
  value: string;
  setValue: (value: string) => void;
  valueSearch: string;
  setValueSearch: (value: string) => void;
}

export const AppContext = createContext<IAppContext>({
  value: "",
  setValue(value) {},
  valueSearch: "",
  setValueSearch(value) {},
});

const PizzaStoreLazy = lazy(
  () =>
    import(
      /* webpackChunkName: "PizzaStore" */ "./components/PizzaStore/PizzaStore"
    )
);
const PizzaPageLazy = lazy(
  () =>
    import(
      /* webpackChunkName: "PizzaPage" */ "./components/PizzaPage/PizzaPage"
    )
);
const CartPageLazy = lazy(
  () =>
    import(/* webpackChunkName: "CartPage" */ "./components/CartPage/CartPage")
);
const EmptyCartLazy = lazy(
  () =>
    import(
      /* webpackChunkName: "EmptyCart" */ "./components/OtherPages/EmptyCart"
    )
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<WrapperApp />}>
        <Route
          path=""
          element={
            <Suspense fallback="Загрузка...">
              <PizzaStoreLazy />
            </Suspense>
          }
        />
        <Route
          path="pizza/:id"
          element={
            <Suspense fallback="Загрузка...">
              <PizzaPageLazy />
            </Suspense>
          }
        />
        <Route
          path="cart"
          element={
            <Suspense fallback="Загрузка...">
              <CartPageLazy />
            </Suspense>
          }
        />
        <Route
          path="emptyCart"
          element={
            <Suspense fallback="Загрузка...">
              <EmptyCartLazy />
            </Suspense>
          }
        />
        <Route path="*" element={<h1>Файл не найден, Сорямба(</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
