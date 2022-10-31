import { configureStore } from '@reduxjs/toolkit';
import products from './products/products';

const store = configureStore({
	reducer: {
		products: products.reducer,
	},
});

export default store;
