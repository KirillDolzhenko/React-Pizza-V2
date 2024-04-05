import { useSelector } from "react-redux";
import logoImg from "../../../assets/images/header/cart.svg";
import { RootState } from "../../../redux/store";
import { useEffect, useMemo } from "react";
import { countItems } from "../../../functions/countItems";
import { saveCartLS } from "../../../functions/saveCartLS";

export function Cart() {
  const items = useSelector((state: RootState) => state.cartSlice.items);

  const amount = useMemo(() => {
    return countItems(items);
  }, [items]);

  const price = useSelector((state: RootState) => state.cartSlice.totalPrice);

  useEffect(() => {
    saveCartLS(items);
  }, [items]);

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
