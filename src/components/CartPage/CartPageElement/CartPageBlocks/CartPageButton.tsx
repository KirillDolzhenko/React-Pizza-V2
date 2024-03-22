import classes from "./CartPageBlocks.module.scss";
import classNames from "classnames";

interface IPropsCartButton {
  children: React.ReactNode;
  colorBut?: string;
}

export function CartPageButton({ children, colorBut }: IPropsCartButton) {
  return (
    <button
      className={classNames({
        [classes.cartPageButton]: true,
        [classes.gray]: colorBut == "gray",
      })}
    >
      {children}
    </button>
  );
}
