import { useSelector } from "react-redux";
import logoImg from "../../../assets/images/header/cart.svg";
import { RootState } from "../../../redux/store";

export function Cart() {
  const amount = useSelector((state: RootState) =>
    state.cartSlice.items.reduce((sum: number, el: any) => {
      return el.count + sum;
    }, 0)
  );

  const price = useSelector((state: RootState) => state.cartSlice.totalPrice);

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
