import { ICartItem } from "../redux/slices/cart/types";

export function countItems(items: Array<ICartItem>) {
    return items.reduce((sum: number, el: ICartItem) => {
        return el.count + sum;
    }, 0);
}