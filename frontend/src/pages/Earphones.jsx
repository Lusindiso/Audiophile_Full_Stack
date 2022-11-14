import Products from "../components/Products";
import About from "../UI/About";
import Categories from "../UI/Categories";
import CategoryHeader from "../UI/CategoryHeader";


const Earphones = () => {
	return (
		<>
			<CategoryHeader header='Earphones' />
			<Products category='earphone' />
			<Categories />
			<About />
		</>
	);
};
export default Earphones;