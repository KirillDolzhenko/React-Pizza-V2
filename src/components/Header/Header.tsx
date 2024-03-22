import { Logo } from "./Logo/Logo";
import { Cart } from "./Cart/Cart";
import { Link, Route, Routes } from "react-router-dom";

export function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <Logo />
        </Link>
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
