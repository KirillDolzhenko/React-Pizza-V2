import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { DivisionLine } from "./components/DivisionLine/DivisionLine";

export function WrapperApp() {
  return (
    <div className="container">
      <Header></Header>
      <DivisionLine></DivisionLine>
      <Outlet></Outlet>
    </div>
  );
}
