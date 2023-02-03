import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import { BsFillPinMapFill } from 'react-icons/bs';

function Contact() {
	return (
		<>
			<ContactWrapper>
				<Navbar />
				<ContactContainer>
					<h4>Kontakt</h4>
					<ul>
						<li>
							<AiFillPhone /> 90925800
						</li>
						<li>
							<AiOutlineMail /> eksempel@eksempel.com
						</li>
						<li>
							{' '}
							<BsFillPinMapFill /> Eksempelveien 20, 4020, Stavanger
						</li>
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
		font-size: 4em;
	}
	li {
		list-style: none;
		font-size: 2em;
		margin: 1em auto;
	}
	@media (max-width: 768px) {
		font-size: 2vw;
		max-width: 100%;
	}
`;
