import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CategoriesSliceState, CategoryItem } from './types';

const initialState: CategoriesSliceState = {
  categories: [],
};

const apiUrl = import.meta.env.VITE_API_URL;

export const fetchCategories = createAsyncThunk<CategoryItem[]>(
  'categories/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<CategoryItem[]>(
        `${apiUrl}/categories`
      );
      return data;
    } catch (error) {
      return rejectWithValue([]);
    }
  }
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCategories.pending, (state) => {
      state.categories = [];
    });
    builder.addCase(fetchCategories.fulfilled, (state, { payload }) => {
      state.categories = payload;
    });
    builder.addCase(fetchCategories.rejected, (state) => {
      state.categories = [];
    });
  },
});

export const { } = categoriesSlice.actions;

export default categoriesSlice.reducer;
