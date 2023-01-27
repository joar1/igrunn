import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Navbar() {
	return (
		<>
			<NavContainer>
				<NavLogo>
					<StyledLogo to='/'>igrunnen.no</StyledLogo>
				</NavLogo>
				<NavDiv>
					<StyledLink to='/grunnvarme'>Litt om grunnvarme</StyledLink>
					<StyledLink to='/tilgjenglig'>Passer dette min bolig?</StyledLink>
					<StyledLink to='/tjenester'>Tjenester</StyledLink>
					<StyledLink to='/om'>Om</StyledLink>
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
	max-width: 100%;
	height: 4vh;
	padding: 2em 0;
	background: black;
	@media (max-width: 768px) {
		font-size: 2vw;
	}
`;

const NavLogo = styled.div`
	margin-left: 2.5em;
	font-weight: bold;
	@media (max-width: 768px) {
		margin: 1em;
	}
`;

const StyledLogo = styled(NavLink)`
	padding: 0.2em;
	text-decoration: none;
	font-size: 1.7em;
	color: orange;
	text-shadow: red 1px 0 10px;
`;

const NavDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	margin-right: 4em;
`;

const StyledLink = styled(NavLink)`
	padding: 0.8em;
	font-size: 1.3em;
	text-decoration: none;
	color: #f1f1f1;
	&:hover {
		text-decoration: underline;
		text-underline-offset: 0.6em;
		color: orange;
		/* text-shadow: red 1px 0 10px; */
		@media (max-width: 768px) {
			text-decoration: none;
		}
	}
	&.active {
		color: orange;
		text-shadow: red 1px 0 10px;
		text-decoration: underline;
		text-underline-offset: 0.6em;
		@media (max-width: 768px) {
			text-decoration: none;
		}
	}
`;
