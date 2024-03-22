import logoImg from "../../../assets/images/header/cart.svg";

export function Cart() {
  return (
    <button className="cart">
      <span>520</span>

      <span>
        <img src={logoImg} />3
      </span>
    </button>
  );
}
