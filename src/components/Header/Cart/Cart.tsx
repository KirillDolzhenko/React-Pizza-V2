import { useSelector } from "react-redux";
import logoImg from "../../../assets/images/header/cart.svg";
import { RootState } from "../../../redux/store";
import {
  ICartItem,
  selectorCartTotalPrice,
} from "../../../redux/slices/cartSlice";

export function Cart() {
  const amount = useSelector((state: RootState) =>
    state.cartSlice.items.reduce((sum: number, el: ICartItem) => {
      return el.count + sum;
    }, 0)
  );

  const price = useSelector(selectorCartTotalPrice);

  return (
    <button className="cart">
      <span>{price ? price : "ничо"}</span>

      <span>
        <img src={logoImg} />
        {amount}
      </span>
    </button>
  );
}
