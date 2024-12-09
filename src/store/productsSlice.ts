import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from './types'; // Importing the type definition for `Product`

interface ProductsState {
  products: Product[];
}

const initialState: ProductsState = {
  products: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    //// Defining a reducer function to handle setting products
      setProducts: (state, action: PayloadAction<Product[]>) => {
          state.products = action.payload;
      },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;