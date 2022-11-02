import { createSlice } from '@reduxjs/toolkit';

const products = createSlice({
	name: 'products',
	initialState: [],
	reducers: {
		addData(state, action) {
			state = action.payload;
		},
	},
});
export const productsActions = products.actions;

export default products;
