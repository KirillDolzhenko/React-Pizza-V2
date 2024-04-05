// import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

// interface ICategory {
//   index: number,
//   link: string
// }

// export interface ICategoryProps {
//   sorting: ICategory,
//   category: number,
// }

// const initialState: ICategoryProps = {
//   sorting: {
//     index: 0,
//     link: "sortby=rating&order=asc",
//   },
//   category: 0,
// }

// export const counterSlice = createSlice({
//   name: 'category',
//   initialState,
//   reducers: {
//     setCategory: (state, action: PayloadAction<number>) => {
//       state.category = action.payload;
//     },
//     setSorting: (state, action: PayloadAction<ICategory>) => {
//       state.sorting = action.payload;
//     },
//   },
// })

// export const { setCategory, setSorting } = counterSlice.actions

// export default counterSlice.reducer