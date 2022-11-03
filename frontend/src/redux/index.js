import { configureStore } from '@reduxjs/toolkit';
import products from './products/products';

import { composeWithDevTools } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const store = configureStore({
	reducer: {
		products: products.reducer,
	},
	middleware: [thunk],
});

export default store;
