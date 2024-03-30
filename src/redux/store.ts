import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './slices/categorySlice'
import searchSlice from './slices/searchSlice'
import paginationSlice from './slices/paginationSlice'
import cartSlice from './slices/cartSlice'
import pizzasSlice from './slices/pizzasSlice'

export const store = configureStore({
  reducer: {
    categorySlice,
    searchSlice,
    paginationSlice,
    cartSlice,
    pizzasSlice
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch