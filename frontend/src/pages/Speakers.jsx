import Products from "../components/Products";
import About from "../UI/About";
import Categories from "../UI/Categories";
import CategoryHeader from "../UI/CategoryHeader";

const Speakers = () => {
	return (
		<>
			<CategoryHeader header='Speakers' />
			<Products category='speaker' />
			<Categories />
			<About />
		</>
	);
};
export default Speakers;