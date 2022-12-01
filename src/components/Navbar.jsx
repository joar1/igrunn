import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<>
			<NavContainer>
				<NavLogo>
					<StyledLogo to='/'>igrunnen.no</StyledLogo>
				</NavLogo>
				<NavDiv>
					<StyledA href='#BasicHeating'>Litt om grunnvarme</StyledA>
					<StyledLink to='/available'>Passer dette min bolig?</StyledLink>
					<StyledLink to='/services'>Tjenester</StyledLink>
					<StyledLink to='/about'>Om</StyledLink>
				</NavDiv>
			</NavContainer>
		</>
	);
}

export default Navbar;

// Styled components
const NavContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 4vh;
	padding: 2em 0;
	text-shadow: 3.2px 1.1px black;
	background: black;
`;

const NavLogo = styled.div`
	margin-left: 3.2em;
	font-weight: bold;
`;

const StyledLogo = styled(Link)`
	padding: 0.2em;
	text-decoration: none;
	font-size: 1.7em;
	color: orange;
`;

const NavDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	margin-right: 7em;
`;

const StyledLink = styled(Link)`
	padding: 0.7em;
	font-size: 1.3em;
	text-decoration: none;
	color: #f1f1f1;
	&:hover {
		text-decoration: underline;
		text-underline-offset: 0.6em;
	}
`;

const StyledA = styled.a`
	padding: 0.7em;
	font-size: 1.3em;
	text-decoration: none;
	color: #f1f1f1;
	&:hover {
		text-decoration: underline;
		text-underline-offset: 0.6em;
	}
`;
