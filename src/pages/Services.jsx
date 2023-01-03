import styled from 'styled-components';
import Navbar from '../components/Navbar';

function Services() {
	return (
		<>
			<Navbar />
			<ServiceContainer>
				<ul>
					<li>Energibrønner, ferdig montert varmepumpe.</li>
					<li>Vannbrønner, ferdig montert med nedihullspumpe og vanngaranti</li>
					<li>
						Konsulenttjenester for deg som trenger grunnvarmeanlegg større enn
						til et standard bolighus
					</li>
					<li>VVS /Varmepumpe etc.</li>
				</ul>
			</ServiceContainer>
		</>
	);
}

export default Services;

const ServiceContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 12em auto;
	width: 50%;
	ul {
		margin: 0 auto;
	}
	li {
		list-style: none;
		font-size: 2em;
		margin-bottom: 1em;
		line-height: 1.2em;
	}
`;
