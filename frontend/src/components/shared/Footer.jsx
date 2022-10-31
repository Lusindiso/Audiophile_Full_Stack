import './Footer.scss';
import Nav from './Nav';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className="container">
				<div className="footer--header">
					<div className="footer--header__logo">audiophile</div>
					<div className="footer--header__navbar"><Nav /></div>
				</div>
				<p className='footer-about'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
				<div className="footer--bottom">
					<p className="copy-right">Copyright 2021. All Rights Reserved</p>
					<div className="social"></div>
				</div>
			</div>
		</footer>
	);
};
export default Footer;