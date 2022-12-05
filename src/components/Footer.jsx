import { FaFacebookSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
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
				<StyledLink to='/about'>Om Oss</StyledLink>
				<p>Følg oss</p>
			</FooterDiv>

			<FooterDiv>
				<p>90925800</p>
				<p>Om</p>
				<p>Nyhetsbrev</p>
			</FooterDiv>

			<FooterDiv>
				<p>Send oss en epost</p>
				<p>Ledige stillinger</p>
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
	justify-content: space-around;
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
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: orange;
	p {
		margin-top: 0.2em;
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

const StyledLink = styled(Link)`
	padding: 0.7em;
	font-size: 1.3em;
	text-decoration: none;
	color: orange;
	&:hover {
		text-decoration: underline;
		text-underline-offset: 0.6em;
	}
`;
