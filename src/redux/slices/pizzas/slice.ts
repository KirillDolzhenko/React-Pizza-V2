import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { EStatus, IPizzasProps } from "./types";
import { fetchPizzas } from "./asyncThunk";

const initialState: IPizzasProps = {
    items: [],
    status: EStatus.LOADING
}

const pizzasSlice = createSlice({
    name: "pizzas",
    initialState,
    reducers: {
        setItems (state, action) {
            state.items = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.items = action.payload;
            console.log(action.payload)
            state.status = EStatus.LOADED;
        })
        builder.addCase(fetchPizzas.pending, (state) => {
            state.items = [];
            state.status = EStatus.LOADING;
        })
        builder.addCase(fetchPizzas.rejected, (state) => {
            state.status = EStatus.ERROR;
            ;
        })
    }
})

export default pizzasSlice.reducer;