import styled from 'styled-components';
import Bilde6 from '../images/bilde6.JPG';
import Bilde7 from '../images/bilde7.PNG';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Availability() {
	return (
		<>
			<AvailabilityContainer>
				<Navbar />
				<HeaderH1>Passer dette min bolig?</HeaderH1>
				<StyledParagraphWhite>
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
				</StyledParagraphWhite>
				<ImageContainer>
					<img src={Bilde6} alt='#' />
					<img src={Bilde7} alt='#' />
				</ImageContainer>
				<StyledParagraphOrange>
					Mange velger også å installere en viftekonvektor. Disse kommer nå i
					slanke og elegante varianter, og fungerer som en tilsvarende innedel
					til en luft-luft varmepumpe, med både varme- og kjølefunksjon. En
					fordel her er også at kjøling/overskuddsvarme fra sommerhalvåret
					«lader» brønnen til vinteren, og det er dette som kalles frikjøling.
					{<br />} {<br />}
					Den samme varmepumpa leverer også tappevann, slik at din gamle elkjel
					kan fases ut. Varmtvannet du bruker til dusj og oppvask er altså
					oppvarmet med den samme kostnadsbesparende teknologien.
				</StyledParagraphOrange>
				<Footer />
			</AvailabilityContainer>
		</>
	);
}

export default Availability;

const AvailabilityContainer = styled.div`
	margin: 0 auto;
	background: #231e1a;
	color: white;
	@media (max-width: 768px) {
		display: grid;
		grid-template-columns: 1fr;
		font-size: 2vw;
		max-width: 100%;
	}
`;

const HeaderH1 = styled.h1`
	margin-top: 1em;
	font-size: 4em;
	padding: 0;
	text-align: center;
	color: orange;
`;

const StyledParagraphWhite = styled.p`
	text-align: left;
	margin: 0 auto;
	font-size: 2em;
	line-height: 1.2;
	padding: 1em 2em;
	width: 85%;
	color: white;
`;
const StyledParagraphOrange = styled.p`
	text-align: left;
	margin: 0 auto;
	font-size: 2em;
	line-height: 1.2;
	padding: 1em 2em 2em 2em;
	width: 85%;
	color: orange;
`;

const ImageContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	margin: 0 auto;
	width: 85%;
	img {
		height: 512px;
		width: 560px;
		border-radius: 20px;
	}
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		max-width: 100%;
	}
`;
