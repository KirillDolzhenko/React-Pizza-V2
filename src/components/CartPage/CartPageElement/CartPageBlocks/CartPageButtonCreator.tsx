import { CartPageButton } from "./CartPageButton";
import xImage from "../../../../assets/images/cartBlock/x.svg";
import minusImage from "../../../../assets/images/cartBlock/minus.svg";
import plusImage from "../../../../assets/images/cartBlock/plus.svg";

interface IPropsCPBCreator {
  type: string;
  onClick?: () => void;
}

export function CartPageCuttonCreator({ type, onClick }: IPropsCPBCreator) {
  switch (type) {
    case "+":
      return (
        <CartPageButton onClick={onClick}>
          {
            <svg>
              <use href={`${plusImage}#id`} />
            </svg>
          }
        </CartPageButton>
      );
    case "-":
      return (
        <CartPageButton onClick={onClick}>
          {
            <svg>
              <use href={`${minusImage}#id`} />
            </svg>
          }
        </CartPageButton>
      );
    case "x":
      return (
        <CartPageButton onClick={onClick} colorBut="gray">
          {
            <svg>
              <use href={`${xImage}#id`} />
            </svg>
          }
        </CartPageButton>
      );
    case "++":
      return (
        <svg>
          <use href={`${xImage}#id`} />
        </svg>
      );
  }
}
