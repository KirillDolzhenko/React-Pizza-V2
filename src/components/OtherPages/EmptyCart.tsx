import { Link } from "react-router-dom";
import img from "../../assets/images/emptyCart/customer.svg";
import classes from "./EmptyCart.module.scss";
import classes2 from "../CartPage/CartPageBuying/CartPageBuying.module.scss";
import classNames from "classnames";

function EmptyCart() {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Корзина пустая 😰</h1>
      <p className={classes.text}>
        Вероятнее всего, вы не заказывали ещё пиццу. Для того, чтобы заказать
        пиццу, перейди на главную страницу.
      </p>
      <svg className={classes.image}>
        <use href={`${img}#id`} />
      </svg>
      <Link to="/">
        <button
          className={classNames({
            [classes2.button]: true,
            [classes2.black]: true,
          })}
        >
          Вернутся назад
        </button>
      </Link>
    </div>
  );
}

export default EmptyCart;
