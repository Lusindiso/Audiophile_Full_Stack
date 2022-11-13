import './Product.scss';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
	console.log(product);
	return (
		<div className="product container">
			<div className="product--image"><img src={product.image} alt="" /></div>
			<div className="product--details">
				{product.new && <p>NEW PRODUCT</p>}
				<h2>{product.name}</h2>
				<p className='desc'>{product.description}</p>
				<Link className="btn-orange">See product</Link>
			</div>
		</div>
	);
};
export default Product;