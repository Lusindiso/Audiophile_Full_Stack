import { createSlice } from '@reduxjs/toolkit';

const products = createSlice({
	name: 'products',
	initialState: {products:[]},
	reducers: {
		addData(state, action) {
			state.products = action.payload;
		},
	},
});

export const productsActions = products.actions;

export default products;
