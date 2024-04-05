import { ICartItem } from "../redux/slices/cart/types";

export function countItemsPrice(items: Array<ICartItem>) {
    return items.reduce((sum: number, el: ICartItem) => {
        return el.count*el.price + sum;
    }, 0);
}