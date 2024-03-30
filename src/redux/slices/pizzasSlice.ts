// import { searchSlice } from './searchSlice';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


interface IProps {
    items: Array<IItem> | null,
    status: string
}

const initialState: IProps = {
    items: [],
    status: "none" 
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

export const fetchPizzas = createAsyncThunk('pizzas/fetchPizzas', async ({category, search, link, currentPage, elementsPerPage}: IFetchParams) => {
    
    // const {category, search, link, currentPage, elementsPerPage} = params;

    const data = await axios.get(
        `https://65f744adb4f842e808856702.mockapi.io/pizzas${
          category ? `?category=${category}&` : "?"
        }${`search=${search}&`}${link}&page=${currentPage}&limit=${elementsPerPage}`
    );

    console.log(data)

    return data.data;
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
            state.status = "loaded";
        })
        builder.addCase(fetchPizzas.pending, (state) => {
            state.items = [];
            state.status = "loading";
        })
        builder.addCase(fetchPizzas.rejected, (state) => {
            state.status = "error";
        })
    }
})

export default pizzasSlice.reducer;