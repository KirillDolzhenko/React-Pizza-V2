import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IFetchParams, IItem } from "./types";

export const fetchPizzas = createAsyncThunk<IItem[], IFetchParams>('pizzas/fetchPizzas', async ({category, search, link, currentPage, elementsPerPage}, thunkAPI) => {
    try {
        const data = await axios.get(
            `https://65f744adb4f842e808856702.mockapi.io/pizzas${
              category ? `?category=${category}&` : "?"
            }${`search=${search}&`}${link}&page=${currentPage}&limit=${elementsPerPage}`
        );
        return data.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error)
    }
})

