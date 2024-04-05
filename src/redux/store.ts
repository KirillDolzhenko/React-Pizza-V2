import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './slices/category/slice'
import searchSlice from './slices/search/slice'
import paginationSlice from './slices/pagination/slice'
import cartSlice from "./slices/cart/slice"
import pizzasSlice from './slices/pizzas/slice'
import descSlice from './slices/desc/slice'

export const store = configureStore({
  reducer: {
    categorySlice,
    searchSlice,
    paginationSlice,
    cartSlice,
    pizzasSlice,
    descSlice
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch