import classes from "./CartPageBuying.module.scss";
import classNames from "classnames";
import pathImg from "../../../assets/images/cartBlock/path.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import {
  ICartItem,
  selectorCartTotalPrice,
} from "../../../redux/slices/cartSlice";
import { Link } from "react-router-dom";

export function CartPageBuying() {
  const amount = useSelector((state: RootState) =>
    state.cartSlice.items.reduce((sum: number, el: ICartItem) => {
      return el.count + sum;
    }, 0)
  );
  const priceCart = useSelector(selectorCartTotalPrice);

  return (
    <section className={classes.buying}>
      <p
        className={classNames({
          [classes.buying__summary]: true,
          [classes.summary]: true,
        })}
      >
        <p className={classes.summary__count}>
          Всего пицц: <span>{amount} шт.</span>
        </p>
        <p className={classes.summary__price}>
          Сумма заказа: <span>{priceCart} руб.</span>
        </p>
      </p>
      <div className={classes.buying__buttons}>
        <Link to="/">
          <button
            className={classNames({
              [classes.button]: true,
              [classes.gray]: true,
            })}
          >
            <svg>
              <use href={`${pathImg}#icon`} />
            </svg>
            Вернутся назад
          </button>
        </Link>
        <button className={classes.button}>Оплатить сейчас</button>
      </div>
    </section>
  );
}
