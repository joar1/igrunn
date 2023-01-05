import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Services() {
	return (
		<>
			<ServiceWrapper>
				<Navbar />
				<ServiceContainer>
					<h4>Tjenester</h4>
					<ul>
						<li>Energibrønner, ferdig montert varmepumpe.</li>
						<li>
							Vannbrønner, ferdig montert med nedihullspumpe og vanngaranti
						</li>
						<li>
							Konsulenttjenester for deg som trenger grunnvarmeanlegg større enn
							til et standard bolighus
						</li>
						<li>VVS /Varmepumpe etc.</li>
					</ul>
				</ServiceContainer>
				<Footer />
			</ServiceWrapper>
		</>
	);
}

export default Services;

const ServiceWrapper = styled.div`
	line-height: 2.3em;
	background: #231e1a;
	color: orange;
`;

const ServiceContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 5em auto;
	border-radius: 25px;
	background: #121212;
	width: 75%;
	padding: 2em;
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
