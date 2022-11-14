import Products from "../components/Products";
import About from "../UI/About";
import Categories from "../UI/Categories";
import CategoryHeader from "../UI/CategoryHeader";

const Headphones = () => {
	return (
		<>
			<CategoryHeader header='Speakers' />
			<Products category='headphone' />
			<Categories />
			<About />
		</>
	);
};
export default Headphones;