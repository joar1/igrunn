import { FaFacebookSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import Logo from '../images/igrunnen.jpg';
import styled from 'styled-components';

function Footer() {
	return (
		<FooterContainer>
			<FooterImg>
				<img src={Logo} alt='logo' />
			</FooterImg>
			<FooterDiv>
				<p>Kontakt</p>
				<p>Om</p>
				<p>Nyhtetsbrev</p>
			</FooterDiv>
			<SoMe>
				<SoMeLinks href='#' target='_blank'>
					<FaFacebookSquare />
				</SoMeLinks>
				<SoMeLinks href='#' target='_blank'>
					<FaLinkedin />
				</SoMeLinks>
			</SoMe>
		</FooterContainer>
	);
}

export default Footer;

const FooterContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: black;
`;

const FooterImg = styled.div`
	img {
		height: 10em;
		padding: 1em 0;
	}
`;

const FooterDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: orange;

	p {
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
	color: orange;
	font-size: 1.6em;
`;
