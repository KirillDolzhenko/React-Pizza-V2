import { Logo } from "./Logo/Logo";
import { Cart } from "./Cart/Cart";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import { PizzaStoreSearch } from "./PizzaStoreSearch/PizzaStoreSearch";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/slices/pagination/slice";

export function Header() {
  const location = useLocation();

  const dispatch = useDispatch();

  return (
    <header className="header">
      <div className="header__container">
        <Link
          onClick={() => {
            dispatch(setCurrentPage(1));
          }}
          to="/?category=0&page=1&sort=0"
        >
          <Logo />
        </Link>
        {location.pathname == "/" && <PizzaStoreSearch />}
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
