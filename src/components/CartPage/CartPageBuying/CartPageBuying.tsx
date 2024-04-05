import classes from "./CartPageBuying.module.scss";
import classNames from "classnames";
import pathImg from "../../../assets/images/cartBlock/path.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Link } from "react-router-dom";
import { countItems } from "../../../functions/countItems";
import { useEffect, useMemo } from "react";
import { saveCartLS } from "../../../functions/saveCartLS";
import { selectorCartTotalPrice } from "../../../redux/slices/cart/selectors";

export function CartPageBuying() {
  const items = useSelector((state: RootState) => state.cartSlice.items);

  const amount = useMemo(() => {
    return countItems(items);
  }, [items]);

  const priceCart = useSelector(selectorCartTotalPrice);

  useEffect(() => {
    saveCartLS(items);
  }, [items]);

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
