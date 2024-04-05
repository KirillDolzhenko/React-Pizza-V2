import classes from "./CartPageBlocks.module.scss";
import classNames from "classnames";

interface IPropsCartButton {
  children: React.ReactNode;
  colorBut?: string;
  onClick?: () => void;
  number?: number;
}

export function CartPageButton({
  children,
  colorBut,
  onClick,
  number,
}: IPropsCartButton) {
  const isDisabled = number == 1;

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={classNames({
        [classes.cartPageButton]: true,
        [classes.gray]: colorBut == "gray" || isDisabled,
      })}
    >
      {children}
    </button>
  );
}
