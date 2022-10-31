import { productsActions } from './products';

export const fetchProducts = () => async (dispatch) => {
	const fetchData = async () => {
		const res = await fetch('http://127.0.0.1:5000/api/products');
		const data = await res.json();
		return data;
	};

	try {
		const data = await fetchData();
		dispatch(productsActions.addData(data));
	} catch (error) {
		throw new Error(error);
	}
};
