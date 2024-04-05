import { memo, useState } from "react";
import plusIcon from "../../../assets/images/pizzaShop/plus.svg";
import { addItem, selectorCartItems } from "../../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { IItem } from "../../../redux/slices/pizzasSlice";
import { ICartItem } from "../../../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import { fetchItem } from "../../../redux/slices/descSlice";

export interface IProps {
  image: string;
  title: string;
  thickness: IActive[];
  diameter: IActive[];
  price: number;
  cart?: number;
  id?: number;
}

interface IActive {
  title: number | null;
  disabled?: boolean;
}

function PizzaElementReact({
  image,
  title,
  thickness,
  diameter,
  price,
  cart,
  id,
}: IItem) {
  const cartItem: ICartItem[] = useSelector((state: RootState) =>
    state.cartSlice.items.filter((el: ICartItem) => el.id == id)
  );
  const cartItems = useSelector(selectorCartItems);

  const cartAmount = cartItem
    ? cartItem.reduce((sum: number, el: ICartItem) => {
        return el.count + sum;
      }, 0)
    : 0;

  const [activeThickness, setActiveThickness] = useState<number | null>(
    Number(thickness.filter((el) => !Boolean(el.disabled))[0].title)
  );
  const [activeDiameter, setActiveDiameter] = useState<number | null>(
    Number(diameter.filter((el) => !Boolean(el.disabled))[0].title)
  );

  const dispatch = useDispatch<AppDispatch>();

  let thicknessArr = thickness.map((el) => (
    <li key={el.title}>
      <button
        disabled={el.disabled}
        onClick={() => setActiveThickness(el.title)}
        className={el.title == activeThickness ? "active" : ""}
      >
        {el.title ? "традиционная" : "тонкая"}
      </button>
    </li>
  ));
  let diameterArr = diameter.map((el) => (
    <li key={el.title}>
      <button
        disabled={el.disabled}
        onClick={() => setActiveDiameter(el.title)}
        className={el.title == activeDiameter ? "active" : ""}
      >
        {el.title} см.
      </button>
    </li>
  ));

  return (
    <li className="pizzaOptions__element pizzaOption">
      <Link to={`/pizza/${id}`}>
        <div className="pizzaOption__img">
          <img src={image} alt="pizza" />
        </div>
      </Link>
      <h4 className="pizzaOption__title">{title}</h4>
      <div className="pizzaOption__variants">
        <ul className="pizzaOption__thickness">{thicknessArr}</ul>
        <ul className="pizzaOption__diameter">{diameterArr}</ul>
      </div>
      <div className="pizzaOption__price">
        <span>от {price}</span>
        <button
          onClick={() => {
            dispatch(
              addItem({
                id,
                title,
                image,
                thickness: activeThickness,
                diameter: activeDiameter,
                price,
              })
            );
            console.log(cartItems, id);
            console.log(thickness);
            console.log(activeThickness, activeDiameter);
            // setCartAmount(cartAmount + 1);
          }}
        >
          <svg>
            <use xlinkHref={`${plusIcon}#icon`} />
          </svg>
          Добавить
          {Boolean(cartAmount) && <span>{cartAmount}</span>}
        </button>
      </div>
    </li>
  );
}

export const PizzaElement = memo(PizzaElementReact);
