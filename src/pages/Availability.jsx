import styled from 'styled-components';
import Bilde6 from '../images/bilde6.JPG';
import Bilde7 from '../images/bilde7.PNG';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Availability() {
	return (
		<>
			<Navbar />
			<AvailabilityContainer>
				{' '}
				{/* <HeaderH1>Passer dette min bolig?</HeaderH1> */}
				<StyledParagraph>
					For å benytte seg av grunnvarme gir det mest mening om du har
					vannbåren varme installert- som gir stabil og behagelig innetemperatur
					i hele rommet. Vannbåren varme er følgelig lettere å implementere
					under planleggingen av nybygg - dersom du ikke er så heldig at du
					allerede har dette i ditt eksisterende bygg. Men, det er fullt mulig å
					installere vannbåren varme under renovering (om du er litt
					nevenyttig), og klarer du ikke dette selv kan vi hjelpe deg med
					prosessen. Se her hvordan det kan gjøres, enten ved utskiftning av
					gulv, eller ved å installere fra undersiden om du kommer til fra for
					eksempel kjeller.
				</StyledParagraph>
				<ImageContainer>
					<img src={Bilde6} alt='#' />
					<img src={Bilde7} alt='#' />
				</ImageContainer>
				<StyledParagraph>
					Mange velger også å installere en viftekonvektor. Disse kommer nå i
					slanke og elegante varianter, og fungerer som en tilsvarende innedel
					til en luft-luft varmepumpe, med både varme- og kjølefunksjon. En
					fordel her er også at kjøling/overskuddsvarme fra sommerhalvåret
					«lader» brønnen til vinteren, og det er dette som kalles frikjøling.
				</StyledParagraph>
				<StyledParagraph>
					Den samme varmepumpa leverer også tappevann, slik at din gamle elkjel
					kan fases ut. Varmtvannet du bruker til dusj og oppvask er altså
					oppvarmet med den samme kostnadsbesparende teknologien.
				</StyledParagraph>
			</AvailabilityContainer>

			<Footer />
		</>
	);
}

export default Availability;

const AvailabilityContainer = styled.div`
	margin: 0 auto;
	width: 80%;
`;

// const HeaderH1 = styled.h1`
// 	padding: 0.8em 0;
// 	font-size: 3.5em;
// 	text-align: center;
// 	color: orange;
// `;

const StyledParagraph = styled.p`
	text-align: left;
	margin: 2em auto 2em auto;
	font-size: 2.5em;
	padding: 2em;
`;

const ImageContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	justify-content: center;
	margin: 0 auto;
	img {
		height: 512px;
		width: 560px;
		border-radius: 20px;
	}
`;
