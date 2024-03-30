import { Logo } from "./Logo/Logo";
import { Cart } from "./Cart/Cart";
import { Link, Route, Routes } from "react-router-dom";
import { PizzaStoreSearch } from "./PizzaStoreSearch/PizzaStoreSearch";

export function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <Logo />
        </Link>
        <PizzaStoreSearch />
        <Routes>
          <Route
            path="/"
            element={
              <Link to="/cart">
                <Cart />
              </Link>
            }
          />
        </Routes>
      </div>
    </header>
  );
}
