import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface ISorting {
  index: number,
  link: string
}

export interface CounterState {
  sorting: ISorting,
  category: number,
}

const initialState: CounterState = {
  sorting: {
    index: 0,
    link: "sortby=rating&order=asc",
  },
  category: 0,
}

export const counterSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<number>) => {
      state.category = action.payload;
    },
    setSorting: (state, action: PayloadAction<ISorting>) => {
      state.sorting = action.payload;
    },
  },
})

export const { setCategory, setSorting } = counterSlice.actions

export default counterSlice.reducer