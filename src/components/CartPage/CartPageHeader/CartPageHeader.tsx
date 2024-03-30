import classes from "./CartPageHeader.module.scss";
import cartImg from "../../../assets/images/header/cart2.svg";
import trashImg from "../../../assets/images/cartBlock/trash.svg";
import { useDispatch } from "react-redux";
import { clearCart } from "../../../redux/slices/cartSlice";

export function CartPageHeader() {
  const dispatch = useDispatch();
  return (
    <section className={classes.header}>
      <div className={classes.header__logo}>
        <svg>
          <use href={`${cartImg}#icon`} />
        </svg>
        <h1>Корзина</h1>
      </div>
      <button
        onClick={() => {
          dispatch(clearCart());
        }}
        className={classes.header__button}
      >
        <svg>
          <use href={`${trashImg}#icon`} />
        </svg>
        <span>Очистить корзину</span>
      </button>
    </section>
  );
}
