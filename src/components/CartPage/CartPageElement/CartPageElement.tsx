import classNames from "classnames";
import classes from "../CartPage.module.scss";
import image from "../../../assets/images/cartBlock/pizza.png";
import { DivisionLine } from "../../DivisionLine/DivisionLine";
import { cartPageCuttonCreator } from "./CartPageBlocks/CartPageButtonCreator";

interface IPropsCartElement {
  image: string;
  title: string;
  desc: string;
  number: number;
  price: number;
}

export function CartPageElement({
  image,
  title,
  desc,
  number,
  price,
}: IPropsCartElement) {
  return (
    <li
      className={classNames({
        [classes.pizzasCart__item]: true,
        [classes.pizzasItem]: true,
      })}
    >
      <div className={classes.pizzasItem__content}>
        <div className={classes.pizzasItem__desc}>
          <div className={classes.pizzaOption__img}>
            <img src={image} alt="pizzaImage" />
          </div>
          <div className={classes.pizzasItem__text}>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        </div>
        <div className={classes.pizzasItem__buttons}>
          <div className={classes.pizzasItem__count}>
            {cartPageCuttonCreator("-")}
            <span>{number}</span>
            {cartPageCuttonCreator("+")}
          </div>
          <div className={classes.pizzasItem__price}>{price} руб.</div>
          {cartPageCuttonCreator("x")}
        </div>
      </div>
      <DivisionLine />
    </li>
  );
}
