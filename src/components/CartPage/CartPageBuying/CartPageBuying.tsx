import classes from "./CartPageBuying.module.scss";
import classNames from "classnames";
import pathImg from "../../../assets/images/cartBlock/path.svg";

export function CartPageBuying() {
  return (
    <section className={classes.buying}>
      <p
        className={classNames({
          [classes.buying__summary]: true,
          [classes.summary]: true,
        })}
      >
        <p className={classes.summary__count}>
          Всего пицц: <span>3 шт.</span>
        </p>
        <p className={classes.summary__price}>
          Сумма заказа: <span>900 руб.</span>
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
