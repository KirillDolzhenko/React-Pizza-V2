import classes from "./CartPage.module.scss";
import { DivisionLine } from "../DivisionLine/DivisionLine";
import { CartPageElement } from "./CartPageElement/CartPageElement";

import image from "../../assets/images/cartBlock/pizza.png";
import { CartPageHeader } from "./CartPageHeader/CartPageHeader";
import { CartPageBuying } from "./CartPageBuying/CartPageBuying";
export function CartPage() {
  return (
    <>
      <div className={classes.container}>
        <DivisionLine />
        <CartPageHeader />
        <section className={classes.pizzasCart}>
          <DivisionLine />
          <ul className={classes.pizzasCart__list}>
            <CartPageElement
              image={image}
              title="Сырные шареки"
              desc="тонкое тесто, 10 см."
              number={1}
              price={300}
            />
            <CartPageElement
              image={image}
              title="Сырные шареки"
              desc="тонкое тесто, 10 см."
              number={9}
              price={400}
            />
            <CartPageElement
              image={image}
              title="Сырные шареки"
              desc="тонкое тесто, 10 см."
              number={1}
              price={500}
            />
          </ul>
        </section>
        <CartPageBuying />
      </div>
    </>
  );
}
