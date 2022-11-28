import styled from 'styled-components';

function Footer() {
	return (
		<FooterContainer>
			<div>
				<h1>Fremtiden ligger iGrunnen</h1>
			</div>
		</FooterContainer>
	);
}

export default Footer;

const FooterContainer = styled.div`
	width: 100%;
	text-align: center;
	padding: 1em;
	color: white;
	background: black;
	font-size: 1.4em;
	font-weight: bold;
`;
