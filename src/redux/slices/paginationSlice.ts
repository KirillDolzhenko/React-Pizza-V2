import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PaginationState {
  currentPage: number,
  number: number,
  elementsPerPage: number,
}

const initialState: PaginationState = {
  currentPage: 1,
  number: 18,
  elementsPerPage: 8,
}

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
      console.log(action.payload)
    },
    setNumber: (state, action: PayloadAction<number>) => {
      state.number = action.payload;
    },
  },
})



export const { setCurrentPage, setNumber } = paginationSlice.actions

export default paginationSlice.reducer