import "./nullstyle.scss";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { DivisionLine } from "./components/DivisionLine/DivisionLine";
import { PizzaStore } from "./components/PizzaStore/PizzaStore";
import { Routes, Route } from "react-router-dom";
import { CartPage } from "./components/CartPage/CartPage";
import { createContext } from "react";
import { EmptyCart } from "./components/OtherPages/EmptyCart";
import { WrapperApp } from "./WrapperApp";
import { PizzaPage } from "./components/PizzaPage/PizzaPage";

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

function App() {
  return (
    // <div className="container">
    //   <Header></Header>
    //   <DivisionLine></DivisionLine>
    <Routes>
      <Route path="/" element={<WrapperApp />}>
        <Route path="" element={<PizzaStore />} />
        <Route path="pizza/:id" element={<PizzaPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="emptyCart" element={<EmptyCart />} />
        <Route path="*" element={<h1>Файл не найден, Сорямба(</h1>} />
      </Route>
    </Routes>
    // </div>
  );
}

export default App;
