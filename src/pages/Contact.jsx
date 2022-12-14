import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import BackgroundImg from '../images/contact.jpg';

function Contact() {
	return (
		<>
			<ContactContainer>
				<Navbar />
				<BgImg>
					<ContactDiv>
						<p>Tlf: 90925800</p>
						<p>e-mail: xxxxx@xxx.com</p>
						<p>adresse: xxxxxxxx</p>
					</ContactDiv>
				</BgImg>
				<Footer />
			</ContactContainer>
		</>
	);
}

export default Contact;

const ContactContainer = styled.div`
	line-height: 1.4em;
	background: black;
`;

const ContactDiv = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	justify-content: center;
	width: 40vh;
	height: 80vh;
	margin: 0 auto;
`;

const BgImg = styled.div`
	background-image: url(${BackgroundImg});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;
