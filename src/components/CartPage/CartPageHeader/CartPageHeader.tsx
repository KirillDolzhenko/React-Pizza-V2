import classes from "./CartPageHeader.module.scss";
import cartImg from "../../../assets/images/header/cart2.svg";
import trashImg from "../../../assets/images/cartBlock/trash.svg";

export function CartPageHeader() {
  return (
    <section className={classes.header}>
      <div className={classes.header__logo}>
        <svg>
          <use href={`${cartImg}#icon`} />
        </svg>
        <h1>Корзина</h1>
      </div>
      <button className={classes.header__button}>
        <svg>
          <use href={`${trashImg}#icon`} />
        </svg>
        <span>Очистить корзину</span>
      </button>
    </section>
  );
}
