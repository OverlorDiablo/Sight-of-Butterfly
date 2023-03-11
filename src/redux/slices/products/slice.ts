import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ProductsSliceState, ProductItem } from './types';

const initialState: ProductsSliceState = {
  products: [],
};

export const fetchProducts = createAsyncThunk<ProductItem[]>(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<ProductItem[]>('http://localhost:5000/products');
      return data;
    } catch (error) {
      return rejectWithValue([]);
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProducts.pending, (state) => {
      state.products = [];
    });
    builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
      state.products = payload;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.products = [];
    });
  },
});

export const {} = productsSlice.actions;

export default productsSlice.reducer;
