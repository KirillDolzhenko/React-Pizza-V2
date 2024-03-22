import { CartPageButton } from "./CartPageButton";
import xImage from "../../../../assets/images/cartBlock/x.svg";
import minusImage from "../../../../assets/images/cartBlock/minus.svg";
import plusImage from "../../../../assets/images/cartBlock/plus.svg";

export function cartPageCuttonCreator(type: string) {
  switch (type) {
    case "+":
      return (
        <CartPageButton>
          {
            <svg>
              <use href={`${plusImage}#id`} />
            </svg>
          }
        </CartPageButton>
      );
    case "-":
      return (
        <CartPageButton>
          {
            <svg>
              <use href={`${minusImage}#id`} />
            </svg>
          }
        </CartPageButton>
      );
    case "x":
      return (
        <CartPageButton colorBut="gray">
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
