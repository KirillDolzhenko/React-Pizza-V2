import "./nullstyle.scss";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { DivisionLine } from "./components/DivisionLine/DivisionLine";
import { PizzaStore } from "./components/PizzaStore/PizzaStore";
import { Routes, Route } from "react-router-dom";
import { CartPage } from "./components/CartPage/CartPage";
import { createContext } from "react";

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
    <div className="container">
      <Header></Header>
      <DivisionLine></DivisionLine>
      <Routes>
        <Route path="/" element={<PizzaStore />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/*" element={<h1>Файл не найден, Сорямба(</h1>} />
      </Routes>
    </div>
  );
}

export default App;
