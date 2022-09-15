import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { productStateType, productType } from "../Types";


const initialState: productStateType = {
    isLoading: false,

    products: []
}

export const fetchProducts = createAsyncThunk('product/fetch', async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
        .then(res => {
            console.log("Axios response", res.data)
            return res.data
        })
        .catch(err => err)
    return response;
})

export const fetchOneProduct = createAsyncThunk('product/fetchOne', async (id: any) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
                .then(res => res.data)
    return response;
})

const productSlicer = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            action.payload.map((el: any) => {
                console.log("ELEKNFRKSJFN", el);
                state.products.push(el)
            })
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false;
        })
        //fetchOne Cases
        builder.addCase(fetchOneProduct.pending, (state, action) =>{
            state.isLoading = true;
        })
        builder.addCase(fetchOneProduct.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.currentProduct = action.payload;
        });
        builder.addCase(fetchOneProduct.rejected, (state, action) =>{
            state.isLoading = false;
        })
    }
})

export default productSlicer.reducer;