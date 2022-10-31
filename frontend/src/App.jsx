import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Earphones from './pages/Earphones';
import Headphones from './pages/Headphones';
import Home from './pages/Home';
import Speakers from './pages/Speakers';
import Footer from './components/shared/Footer';
import Navbar from './components/shared/Navbar';

import { fetchProducts } from './redux/products/productsActions';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/headphones' element={<Headphones />} />
				<Route path='/speakers' element={<Speakers />} />
				<Route path='/earphones' element={<Earphones />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
