import { FaFacebook } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';
import Logo from '../images/igrunnen.jpg';
import styled from 'styled-components';

function Footer() {
	return (
		<FooterContainer>
			<img src={Logo} alt='logo' />
			<div>
				<h3>Kontakt</h3>
				<h3>Om</h3>
				<h3>Nyhtetsbrev</h3>
			</div>
			{/* <SoMe>
				<SoMeLinks href='#' target='_blank'>
					<FaFacebook />
				</SoMeLinks>
				<SoMeLinks href='#' target='_blank'>
					<ImInstagram />
				</SoMeLinks>
			</SoMe> */}
		</FooterContainer>
	);
}

export default Footer;

const FooterContainer = styled.div`
	display: flex;
	width: 100%;
	padding: 1em;
	font-size: 1em;
	font-weight: bold;
	background: black;
	width: 100%;

	h2 {
		text-align: center;
		color: lightblue;
	}

	h3 {
		text-align: center;
		color: lightblue;
		margin: 0.3em 0;
	}

	img {
		background: none;
		height: 10em;
	}
`;

const SoMe = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const SoMeLinks = styled.a`
	margin: 0 0.3em;
	text-decoration: none;
	color: lightblue;
	font-size: 1.6em;
`;
