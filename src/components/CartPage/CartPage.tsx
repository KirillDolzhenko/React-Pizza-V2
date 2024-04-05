import classes from "./CartPage.module.scss";
import { DivisionLine } from "../DivisionLine/DivisionLine";
import { CartPageElement } from "./CartPageElement/CartPageElement";

import { CartPageHeader } from "./CartPageHeader/CartPageHeader";
import { CartPageBuying } from "./CartPageBuying/CartPageBuying";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ICartItem } from "../../redux/slices/cart/types";
import { selectorCartItems } from "../../redux/slices/cart/selectors";

function CartPage() {
  const items: ICartItem[] = useSelector(selectorCartItems);
  const amount = items.reduce((sum: number, el: ICartItem) => {
    return el.count + sum;
  }, 0);

  const navigate = useNavigate();

  useEffect(() => {
    if (!amount) {
      navigate("/emptyCart");
      console.log(amount);
    }
  }, [amount]);

  return (
    <>
      <div className={classes.container}>
        <DivisionLine />
        <CartPageHeader />
        <section className={classes.pizzasCart}>
          <DivisionLine />
          <ul className={classes.pizzasCart__list}>
            {items.map((el: ICartItem) => (
              <CartPageElement
                id={el.id}
                image={el.image}
                title={el.title}
                thickness={el.thickness}
                diameter={el.diameter}
                number={el.count}
                price={el.price}
              />
            ))}
          </ul>
        </section>
        <CartPageBuying />
      </div>
    </>
  );
}

export default CartPage;
