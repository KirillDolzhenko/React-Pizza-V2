import logoImg from "../../../assets/images/header/logo.png";

export function Logo() {
  return (
    <a href="#" className="logoBlock">
      <div className="logoBlock__image">
        <img src={logoImg} alt="pizza_logo" />
      </div>
      <div className="logoBlock__desc">
        <h2>React Pizza</h2>
        <p>самая вкусная пицца во вселенной</p>
      </div>
    </a>
  );
}
