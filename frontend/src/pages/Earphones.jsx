import Products from "../components/Products";
import About from "../UI/About";
import Categories from "../UI/Categories";


const Earphones = () => {
	return (
		<>
			<Products category='earphone' />
			<Categories />
			<About />
		</>
	);
};
export default Earphones;