import "./nullstyle.scss";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { DivisionLine } from "./components/DivisionLine/DivisionLine";
import { PizzaStore } from "./components/PizzaStore/PizzaStore";
import { Routes, Route } from "react-router-dom";
import { CartPage } from "./components/CartPage/CartPage";

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
