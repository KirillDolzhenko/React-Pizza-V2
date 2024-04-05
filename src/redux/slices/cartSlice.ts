import { RootState } from './../store';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ICartItem {
  id: number;
  title: string,
  image: string,
  price: number,
  diameter: number,
  thickness: number,
  count: number
}

interface IProps {
  items: ICartItem[],
  totalPrice: number
}

const initialState: IProps = {
  items: [],
  totalPrice: 0
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem: ICartItem = action.payload;

      const indexItemStack: ICartItem | undefined = state.items.find((el: ICartItem) => {
        return ((el.id == newItem.id) && (el.thickness == newItem.thickness) && (el.diameter == newItem.diameter))
      }); 

      if (indexItemStack) {
        indexItemStack.count++;
      } else {
        state.items.push({...newItem, count: 1})
      }

      state.totalPrice += newItem.price;
    },
    deleteItem(state, action) {
      const removeItem = action.payload;

      state.items = state.items.filter((el: ICartItem) => {
        if ((el.id == removeItem.id
                && el.thickness == removeItem.thickness
                && el.diameter == removeItem.diameter)) {
          state.totalPrice -= el.price * el.count;

          return false
        }

        return true;
      })      
    },
    decreaseItem(state, action) {
      const newItem = action.payload;

      const indexItemStack: ICartItem | undefined  = state.items.find((el: ICartItem) => {
        return ((el.id == newItem.id) && (el.thickness == newItem.thickness) && (el.diameter == newItem.diameter))
      }); 

      if (indexItemStack) {
        if (indexItemStack.count > 1) {
          indexItemStack.count--;
        } else {
          state.items = state.items.filter((el: ICartItem) => !(el.id == newItem.id && el.thickness == newItem.thickness && el.diameter == newItem.diameter))      
        }
      }

      if (indexItemStack) {
        state.totalPrice -= indexItemStack.price;
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
    } 
  }
});

export const {addItem, deleteItem, decreaseItem, clearCart} = cartSlice.actions;

export const selectorCartTotalPrice = (state: RootState) => state.cartSlice.totalPrice;
export const selectorCartItems = (state: RootState) => state.cartSlice.items;


export default cartSlice.reducer;

