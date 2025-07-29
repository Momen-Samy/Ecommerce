import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import supabase from './supabaseClient';

export interface ProductStateType {
    id: number | null;
    product_title: string;
    product_description: string;
    product_rating: number | null;
    product_price: number | null;
    product_category: string;
    product_images: string[];
}

const initialState: ProductStateType[]  = []



export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const { data, error } = await supabase.from('products').select('*');
    if (error) throw new Error(error.message);
    return data as ProductStateType[];
  }
);


export const productSlice = createSlice({
  name: 'ProductsData',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (_, action) => {
      return action.payload;
    });
  },
})

// Action creators are generated for each case reducer function
export const {} = productSlice.actions

export default productSlice.reducer