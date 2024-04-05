import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ISearchProps } from './types';

const initialState: ISearchProps = {
  value: "",
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
})

export const { setSearch } = searchSlice.actions

export default searchSlice.reducer