import Nav from './Nav';
import './Navbar.scss';

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="container">
				<div className="navbar--logo">
					audiophile
				</div>
				<Nav />
				<div className="navbar--right">
					<div className="profile">pr</div>
					<div className="cart">cart</div>
				</div>
			</div>

		</nav>
	);
};
export default Navbar;