import { FaFacebook } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';
import Logo from '../images/igrunnen.jpg';
import styled from 'styled-components';

function Footer() {
	return (
		<FooterContainer>
			<FooterImg>
				<img src={Logo} alt='logo' />
			</FooterImg>
			<FooterDiv>
				<h3>Kontakt</h3>
				<h3>Om</h3>
				<h3>Nyhtetsbrev</h3>
			</FooterDiv>
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
	align-items: center;
	justify-content: center;
	background: black;
`;

const FooterImg = styled.div`
	img {
		height: 10em;
		padding: 1em 2em;
	}
`;

const FooterDiv = styled.div`
	display: flex;
	text-align: center;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	color: lightblue;

	h3 {
		margin-left: 0.5em;
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
