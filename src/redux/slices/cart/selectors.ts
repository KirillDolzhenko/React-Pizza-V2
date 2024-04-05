import { RootState } from "../../store";

export const selectorCartTotalPrice = (state: RootState) => state.cartSlice.totalPrice;
export const selectorCartItems = (state: RootState) => state.cartSlice.items;
