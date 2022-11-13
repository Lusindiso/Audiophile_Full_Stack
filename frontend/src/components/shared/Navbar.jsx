import { Link } from 'react-router-dom';

import Nav from './Nav';
import './Navbar.scss';
import Logo from '../../assets/logo.svg';


const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="container">
				<div className="navbar--logo">
					<Link to='/'>
						<img src={Logo} alt="" />
					</Link>
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