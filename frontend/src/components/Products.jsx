import { useSelector } from 'react-redux';
import Product from './Product';
import './Products.scss';

const Products = (props) => {
	const products = useSelector(products => products.products.products);
	const productsDisplay = products.filter(product => product.category === props.category);
	console.log(productsDisplay);
	return (
		<section className="products">
			{productsDisplay.map(product => <Product product={product} key={product._id} />)}

		</section>
	);
};
export default Products;;;;