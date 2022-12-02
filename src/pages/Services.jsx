import styled from 'styled-components';
import Navbar from '../components/Navbar';

function Services() {
	return (
		<>
			<Navbar />
			<ServiceContainer>
				<StyledParagraph>
					Energibrønner, ferdig montert varmepumpe.
				</StyledParagraph>
				<StyledParagraph>
					Vannbrønner, ferdig montert med nedihullspumpe og vanngaranti
				</StyledParagraph>
				<StyledParagraph>
					Konsulenttjenester for deg som trenger grunnvarmeanlegg større enn til
					et standard bolighus
				</StyledParagraph>
				<StyledParagraph>VVS /Varmepumpe etc.</StyledParagraph>
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
	width: 80%;
`;

const StyledParagraph = styled.p`
	width: 60%;
	text-align: center;
	word-wrap: normal;
	margin-bottom: 2em;
`;
