import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchItem = createAsyncThunk("desc/fetchItem", async (id: string, thunkAPI) => {
    try {
        const data = await axios.get(`https://65f744adb4f842e808856702.mockapi.io/pizzas/${id}`);
        return data.data
    } catch (err) {
        return err
    }
})
