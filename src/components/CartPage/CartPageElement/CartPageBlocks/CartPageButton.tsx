import classes from "./CartPageBlocks.module.scss";
import classNames from "classnames";

interface IPropsCartButton {
  children: React.ReactNode;
  colorBut?: string;
  onClick?: () => void;
}

export function CartPageButton({
  children,
  colorBut,
  onClick,
}: IPropsCartButton) {
  return (
    <button
      onClick={onClick}
      className={classNames({
        [classes.cartPageButton]: true,
        [classes.gray]: colorBut == "gray",
      })}
    >
      {children}
    </button>
  );
}
