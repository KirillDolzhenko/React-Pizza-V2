import { createSlice } from "@reduxjs/toolkit";
import { IDescProps, TDescItem } from './types';
import { fetchItem } from './asyncThunk';

const initialState: IDescProps = {
    item: null as TDescItem,
    status: "loaded"
}
const descSlice = createSlice({
    name: "desc",
    initialState,
    reducers: {
        setPizzaPage(state) {
            state.item = null;
        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchItem.fulfilled, (state, action) => {
            state.item = action.payload;
            state.status = "loaded";
        }) 
        builder.addCase(fetchItem.pending, (state) => {
            state.status = "loading";
        }) 
        builder.addCase(fetchItem.rejected, (state) => {
            state.status = "error";
        }) 
    }
}); 

export const {setPizzaPage} = descSlice.actions;

export default descSlice.reducer;





