import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Contact() {
	return (
		<>
			<ContactWrapper>
				<Navbar />
				<ContactContainer>
					<h4>Kontakt</h4>
					<ul>
						<li>tlf: {<br />} xxx xx xxx</li>
						<li>email: xxxx@xxxxxxx.com</li>
						<li>adresse: xxxxxxx</li>
					</ul>
				</ContactContainer>
				<Footer />
			</ContactWrapper>
		</>
	);
}

export default Contact;

const ContactWrapper = styled.div`
	line-height: 1.3;
	background: #231e1a;
	color: orange;
`;

const ContactContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 5em auto;
	border-radius: 25px;
	background: #121212;
	width: 60%;
	padding: 5em;
	h4 {
		font-size: 3em;
	}
	li {
		width: 60%;
		list-style: none;
		font-size: 2em;
		margin-bottom: 2em;
		margin: 2em auto;
	}
`;
