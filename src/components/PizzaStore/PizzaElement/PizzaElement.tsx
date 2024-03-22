import { useState } from "react";
import plusIcon from "../../../assets/images/pizzaShop/plus.svg";

export interface IProps {
  image: string;
  title: string;
  thickness: IActive[];
  diameter: IActive[];
  price: number;
  cart: number;
  id?: number;
}

interface IActive {
  title: number | null;
  disabled?: boolean;
}

export function PizzaElement({
  image,
  title,
  thickness,
  diameter,
  price,
  cart,
}: IProps) {
  const [cartAmount, setCartAmount] = useState<number>(cart);
  const [activeThickness, setActiveThickness] = useState<number | null>(null);
  const [activeDiameter, setActiveDiameter] = useState<number | null>(null);

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
      <div className="pizzaOption__img">
        <img src={image} alt="pizza" />
      </div>
      <h4 className="pizzaOption__title">{title}</h4>
      <div className="pizzaOption__variants">
        <ul className="pizzaOption__thickness">{thicknessArr}</ul>
        <ul className="pizzaOption__diameter">{diameterArr}</ul>
      </div>
      <div className="pizzaOption__price">
        <span>от {price}</span>
        <button onClick={() => setCartAmount(cartAmount + 1)}>
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
