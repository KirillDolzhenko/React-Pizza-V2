import { CartPageButton } from "./CartPageButton";
import xImage from "../../../../assets/images/cartBlock/x.svg";
import minusImage from "../../../../assets/images/cartBlock/minus.svg";
import minusImageGray from "../../../../assets/images/cartBlock/minusGray.svg";
import plusImage from "../../../../assets/images/cartBlock/plus.svg";

interface IPropsCPBCreator {
  type: string;
  onClick?: () => void;
  number?: number;
}

export function CartPageCuttonCreator({
  type,
  number,
  onClick,
}: IPropsCPBCreator) {
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
      let minusImgCorrect = null;

      number == 1
        ? (minusImgCorrect = minusImageGray)
        : (minusImgCorrect = minusImage);
      return (
        <CartPageButton number={number} onClick={onClick}>
          {
            <svg>
              <use href={`${minusImgCorrect}#id`} />
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
