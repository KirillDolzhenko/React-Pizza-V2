import classes from "./CartPage.module.scss";
import { DivisionLine } from "../DivisionLine/DivisionLine";
import { CartPageElement } from "./CartPageElement/CartPageElement";

import image from "../../assets/images/cartBlock/pizza.png";
import { CartPageHeader } from "./CartPageHeader/CartPageHeader";
import { CartPageBuying } from "./CartPageBuying/CartPageBuying";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import { ICartItem } from "../../redux/slices/cartSlice";

export function CartPage() {
  const items: ICartItem[] = useSelector(
    (state: RootState) => state.cartSlice.items
  );
  const amount = items.reduce((sum: number, el: ICartItem) => {
    return el.count + sum;
  }, 0);

  if (!amount) {
    return <p>питс нет</p>;
  }

  return (
    <>
      <div className={classes.container}>
        <DivisionLine />
        <CartPageHeader />
        <section className={classes.pizzasCart}>
          <DivisionLine />
          <ul className={classes.pizzasCart__list}>
            {items.length > 0
              ? items.map((el: ICartItem) => (
                  <CartPageElement
                    id={el.id}
                    image={el.image}
                    title={el.title}
                    thickness={el.thickness}
                    diameter={el.diameter}
                    number={el.count}
                    price={el.price}
                  />
                ))
              : "питс нема"}
          </ul>
        </section>
        <CartPageBuying />
      </div>
    </>
  );
}
