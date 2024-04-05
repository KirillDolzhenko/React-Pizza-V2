// import { AppContext } from './../../App';
// import axios from 'axios';
// import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { ICartItem } from './cart/types';

// const initialState: IDescProps = {
//     item: null as TDescItem,
//     status: "loaded"
// }
// // initialState = {}

// export const fetchItem = createAsyncThunk("desc/fetchItem", async (id: string, thunkAPI) => {
//     try {
//         const data = await axios.get(`https://65f744adb4f842e808856702.mockapi.io/pizzas/${id}`);
//         return data.data
//     } catch (err) {
//         return err
//     }
// })

// const descSlice = createSlice({
//     name: "desc",
//     initialState,
//     reducers: {
//         setPizzaPage(state) {
//             state.item = null;
//         }

//     },
//     extraReducers: (builder) => {
//         builder.addCase(fetchItem.fulfilled, (state, action) => {
//             state.item = action.payload;
//             state.status = "loaded";
//         }) 
//         builder.addCase(fetchItem.pending, (state) => {
//             state.status = "loading";
//         }) 
//         builder.addCase(fetchItem.rejected, (state) => {
//             state.status = "error";
//         }) 
//     }
// }); 

// // export const {fetchItem} = descSlice.actions; 

// export const {setPizzaPage} = descSlice.actions;

// export default descSlice.reducer;





