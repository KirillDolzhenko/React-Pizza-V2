import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export enum EStatus {
    LOADED = "loaded",
    LOADING = "loading",
    ERROR = "error"
}

interface IProps {
    items: Array<IItem> | null,
    status: EStatus
}

const initialState: IProps = {
    items: [],
    status: EStatus.LOADING
}

export interface IItem {
    cart: number;
    category: number;
    id: number;
    thickness: Array<IThickness>;
    diameter: Array<IThickness>;
    image: string;
    price: number;
    title: string
}

interface IThickness {
    title: number,
    disabled: boolean
}

interface IFetchParams {
    category: number,
    search: string,
    currentPage: number,
    elementsPerPage: number,
    link: string
} 

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