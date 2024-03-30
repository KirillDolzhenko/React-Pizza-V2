import classes from "./CartPageBuying.module.scss";
import classNames from "classnames";
import pathImg from "../../../assets/images/cartBlock/path.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { ICartItem } from "../../../redux/slices/cartSlice";

export function CartPageBuying() {
  const amount = useSelector((state: RootState) =>
    state.cartSlice.items.reduce((sum: number, el: ICartItem) => {
      return el.count + sum;
    }, 0)
  );
  const priceCart = useSelector(
    (state: RootState) => state.cartSlice.totalPrice
  );

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
        <button className={classes.button}>Оплатить сейчас</button>
      </div>
    </section>
  );
}

//https://65f744adb4f842e808856702.mockapi.io/pizzas?search=%D0%9F%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8%20%D0%A4%D1%80%D0%B5%D1%88
