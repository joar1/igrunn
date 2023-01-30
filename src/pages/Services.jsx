import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Services() {
	return (
		<>
			<ServiceContainer>
				<Navbar />
				<ServiceWrapper>
					<h4>Våre tjenester</h4>
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
				</ServiceWrapper>
				<Footer />
			</ServiceContainer>
		</>
	);
}

export default Services;

const ServiceContainer = styled.div`
	line-height: 1.3;
	background: #231e1a;
	color: orange;
	@media (max-width: 768px) {
		display: grid;
		grid-template-columns: 1fr;
		font-size: 2vw;
		width: 100%;
	}
`;

const ServiceWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 5em auto;
	border-radius: 25px;
	background: #121212;
	width: 75%;
	padding: 5em;
	h4 {
		font-size: 4em;
	}
	li {
		width: 65%;
		list-style: none;
		font-size: 2em;
		margin-bottom: 2em;
		margin: 2em auto;
		color: white;
		@media (max-width: 768px) {
			font-size: 2vh;
			max-width: 100%;
			padding: 0;
		}
	}
	@media (max-width: 768px) {
		display: grid;
		grid-template-columns: 1fr;
		font-size: 2vw;
		max-width: 100%;
	}
`;
