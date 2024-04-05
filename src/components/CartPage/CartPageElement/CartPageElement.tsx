import classNames from "classnames";
import classes from "../CartPage.module.scss";
import { DivisionLine } from "../../DivisionLine/DivisionLine";
import { CartPageCuttonCreator } from "./CartPageBlocks/CartPageButtonCreator";
import { useDispatch } from "react-redux";
import {
  addItem,
  decreaseItem,
  deleteItem,
} from "../../../redux/slices/cartSlice";

interface IPropsCartElement {
  id: number;
  image: string;
  title: string;
  number: number;
  price: number;
  thickness: number;
  diameter: number;
}

export function CartPageElement({
  id,
  image,
  title,
  diameter,
  thickness,
  number,
  price,
}: IPropsCartElement) {
  const dispatch = useDispatch();

  let arrThickness = ["тонкое", "традиционное"];

  return (
    <li
      className={classNames({
        [classes.pizzasCart__item]: true,
        [classes.pizzasItem]: true,
      })}
    >
      <div className={classes.pizzasItem__content}>
        <div className={classes.pizzasItem__desc}>
          <div className={classes.pizzasItem__img}>
            <img src={image} alt="pizzaImage" />
          </div>
          <div className={classes.pizzasItem__text}>
            <h3>{title}</h3>
            <p>{`${arrThickness[thickness]} тесто, ${diameter} см.`}</p>
          </div>
        </div>
        <div className={classes.pizzasItem__buttons}>
          <div className={classes.pizzasItem__count}>
            <CartPageCuttonCreator
              type={"-"}
              number={number}
              onClick={() =>
                dispatch(decreaseItem({ id, thickness, diameter }))
              }
            />
            <span>{number}</span>
            <CartPageCuttonCreator
              type={"+"}
              onClick={() => {
                dispatch(
                  addItem({
                    id,
                    title,
                    image,
                    thickness,
                    diameter,
                    price,
                  })
                );
              }}
            />
          </div>
          <div className={classes.pizzasItem__price}>{price} руб.</div>
          <CartPageCuttonCreator
            type={"x"}
            onClick={() => {
              dispatch(deleteItem({ id, thickness, diameter }));
            }}
          />
        </div>
      </div>
      <DivisionLine />
    </li>
  );
}
