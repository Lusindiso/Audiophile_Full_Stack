import './Product.scss';

const Product = ({ product }) => {
	console.log(product);
	return (
		<div className="product">
			<div className="product--image"><img src={product.image} alt="" /></div>
			<div className="product--detials">
				<h2>{product.name}</h2>
				<p>{product.description}</p>
			</div>
		</div>
	);
};
export default Product;