import { ICartItem } from './../redux/slices/cart/types';

export function saveCartLS(items: Array<ICartItem>) {
    window.localStorage.setItem("cart", JSON.stringify(items));
}