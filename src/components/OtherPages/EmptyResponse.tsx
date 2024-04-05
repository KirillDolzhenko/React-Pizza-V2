// import { Link } from "react-router-dom";
import img from "../../assets/images/emptyCart/pizza.svg";
import classes from "./EmptyResponse.module.scss";
// import classes2 from "../CartPage/CartPageBuying/CartPageBuying.module.scss";
// import classNames from "classnames";

export function EmptyResponse() {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Питс не найдено 😰</h1>
      <p className={classes.text}>
        Вероятнее всего, вы не пытаетесь найти несуществующую питсу. Или же
        какой-то Жорик съел уже все питсы и вам ничего не осталось...
      </p>
      <div className={classes.image}>
        <svg>
          <use href={`${img}#id`} />
        </svg>
      </div>
    </div>
  );
}
