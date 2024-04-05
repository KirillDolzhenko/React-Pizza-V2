import { ICartItem } from "../cart/types";

export type TDescItem = (ICartItem | null);

export interface IDescProps {
    item: TDescItem,
    status: string
} 
