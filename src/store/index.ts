import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';

// Configurar el store
export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});