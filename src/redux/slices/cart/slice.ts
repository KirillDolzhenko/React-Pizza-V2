import { createSlice } from "@reduxjs/toolkit";
import { countItemsPrice } from "../../../functions/countItemsPrice";
import { ICartItem, ICartProps } from "./types";
import { RootState } from "../../store";

let cartItems = JSON.parse(window.localStorage.getItem("cart") as string);
let cartItemsTotalPrice = countItemsPrice(cartItems);

const initialState: ICartProps = {
    items: cartItems,
    totalPrice: cartItemsTotalPrice
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
  
  export default cartSlice.reducer;