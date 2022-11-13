import { useSelector } from 'react-redux';
import Product from './Product';
import './Products.scss';

const Products = (props) => {
	const products = useSelector((state) => state.products.products);
	console.log(products);
	const productsDisplay = products.filter(product => product.category === props.category);
	return (
		<section className="products">
			{productsDisplay.map(product => <Product product={product} key={product._id} />)}

		</section>
	);
};
export default Products;