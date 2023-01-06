import { FaFacebookSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../images/igrunnen.jpg';
import styled from 'styled-components';

function Footer() {
	const ScrollTop = (e) => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<FooterContainer>
			<FooterLogo>
				<img src={Logo} alt='logo' onClick={ScrollTop} />
			</FooterLogo>

			<FooterDiv>
				<StyledLink to='/kontakt'>Kontakt</StyledLink>
				<StyledLink to='/om'>Om oss</StyledLink>
				<p>Følg oss</p>
			</FooterDiv>

			<FooterDiv>
				<p>90925800</p>
				<p>Nyhetsbrev</p>
			</FooterDiv>

			<FooterDiv>
				<StyledA href='mailto:someone@yoursite.com'>Send oss en epost</StyledA>
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
	font-size: 1.3em;
	background: black;
`;

const FooterLogo = styled.div`
	img {
		height: 7em;
		padding: 1em 0;
	}
	&:hover {
		cursor: pointer;
	}
`;

const FooterDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: left;
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
	text-decoration: none;
	color: orange;
	margin-top: 0.2em;
	&:hover {
		text-decoration: underline;
		text-underline-offset: 0.3em;
	}
`;

const StyledA = styled.a`
	text-decoration: none;
	color: orange;
	margin-top: 0.2em;
	&:hover {
		text-decoration: underline;
		text-underline-offset: 0.3em;
	}
`;
