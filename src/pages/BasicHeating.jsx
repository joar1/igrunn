import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Bilde2 from '../images/bilde2.png';
import Bilde3 from '../images/bilde3.JPG';
import Bilde4 from '../images/bilde4.jpg';
import Bilde5 from '../images/bilde5.jpg';

function BasicHeating() {
	return (
		<HeatingContainer>
			<Navbar />
			<LeftSection>
				<a href='https://renewableenergyhub.co.uk/main/heat-pumps-information/ground-source-heat-pumps/'>
					<img src={Bilde2} alt='#' />
				</a>
				<p>
					Grunnvarme er i all hovedsak oppspart solenergi. Temperaturen i
					grunnen er stabil året rundt, og holder ofte 1 til 2 grader høyere
					temperatur enn årsmiddeltemperatur (gjennomsnittlig utetemperatur
					gjennom et helt år) på stedet. Dette gjelder også når utetemperatur er
					på sitt kaldeste, og oppvarmingsbehovet for ditt bygg er størst.
				</p>
			</LeftSection>
			<ParagraphBelowLeftSection>
				Teknologien er velkjent og ferdig utprøvd gjennom flere tiår.
				Energibrønnen er utstyrt med en kolloktorslange fylt med miljøvennlig
				kjølevæske. Denne væsken sirkulerer fra borehullet, opp til en
				varmepumpe som løfter temperaturen ytterligere til gulvvarme og
				radiatortemperatur, for så å returnere til brønnen for å bli oppvarmet
				nytt.
			</ParagraphBelowLeftSection>

			<RightSection>
				<p>
					Energien som kreves er elektrisitet for å drive varmepumpe. Dersom
					varmepumpa har en virkningsgrad (COP) på 4,0, betyr dette at 1 kW
					strøm trengs for å få 4,0 kW «gratis» fra grunnen, altså en reduksjon
					på 80 % sammenlignet med bruk av elkjel til samme formål.
				</p>
				<img src={Bilde3} alt='#' />
			</RightSection>

			<ParagraphBelowRightSection>
				ENOVA anslår at andelen energi benyttet til oppvarming av en
				gjennomsnittlig norsk bolig er 55%, men at andelen kan være så høy som
				80 ved store, dårlig isolerte bygg, og nede i 30 – 40 % i nye, godt
				isolerte bygg. Her kan det altså være mye å spare.
			</ParagraphBelowRightSection>
			<ParagraphBelowRightSectionOrange>
				Avtrykket et minimalt - brønnløkket er i grunnen det eneste du ser.
				Ingen klimautslipp annet enn ved boring av brønn, og her benytter vi oss
				av miljødiesel for å holde dette på sitt laveste. Levetiden på brønnen
				er 50-100 år, og levertid for varmepumpe er ca 20 år.
			</ParagraphBelowRightSectionOrange>

			<ImageContainer>
				<img src={Bilde4} alt='#' />
				<img src={Bilde5} alt='#' />
			</ImageContainer>
			<Footer />
		</HeatingContainer>
	);
}

export default BasicHeating;

const HeatingContainer = styled.div`
	background: linear-gradient(
		0deg,
		rgba(18, 18, 18, 1) 00%,
		rgba(35, 30, 26, 1) 100%
	);
	color: white;
	@media (max-width: 768px) {
		font-size: 2vw;
		max-width: 100%;
	}
`;

// LEFT SECTION
const LeftSection = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 5em auto 2em auto;
	width: 85%;
	p {
		padding-left: 3em;
		line-height: 1.4;
		font-size: 2em;
		text-align: left;
		@media (max-width: 768px) {
			font-size: 3vh;
			padding: 1em 0;
		}
	}
	img {
		height: 512px;
		width: 560px;
		border-radius: 20px;
		@media (max-width: 768px) {
			height: 300px;
			width: 350px;
			margin: 0.5em auto;
		}
	}
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
	}
`;

const ParagraphBelowLeftSection = styled.p`
	width: 85%;
	margin: 0 auto;
	padding: 1em 0;
	line-height: 1.4;
	font-size: 2em;
	color: orange;
	text-align: left;
	@media (max-width: 768px) {
		font-size: 3vh;
		padding: 1em 0;
	}
`;

// RIGHT SECTION
const RightSection = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 5em auto 2em auto;
	width: 85%;
	p {
		padding-right: 3em;
		line-height: 1.4;
		font-size: 2em;
		@media (max-width: 768px) {
			font-size: 3vh;
			max-width: 100%;
			padding: 1em 0;
		}
	}
	img {
		height: 512px;
		width: 560px;
		border-radius: 20px;
		@media (max-width: 768px) {
			height: 300px;
			width: 350px;
			margin: 0.5em auto;
		}
	}
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		font-size: 3vh;
		max-width: 100%;
		margin-top: 0;
	}
`;

const ParagraphBelowRightSection = styled.p`
	width: 85%;
	margin: 0 auto;
	padding: 0.5em 0;
	line-height: 1.4;
	font-size: 2em;
	text-align: left;
	@media (max-width: 768px) {
		font-size: 3vh;
		max-width: 100%;
		padding: 1em 0;
	}
`;

const ParagraphBelowRightSectionOrange = styled.p`
	width: 85%;
	margin: 0 auto 1em auto;
	padding: 0.5em 0;
	line-height: 1.4;
	font-size: 2em;
	color: orange;
	text-align: left;
	@media (max-width: 768px) {
		font-size: 3vh;
		max-width: 100%;
		padding: 1em 0;
	}
`;

const ImageContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	margin: 0 auto 3em auto;
	width: 100%;
	padding-bottom: 1em;
	img {
		height: 512px;
		width: 560px;
		border-radius: 20px;
		@media (max-width: 768px) {
			height: 300px;
			width: 350px;
			margin: 1em auto;
		}
	}
	@media (max-width: 768px) {
		display: grid;
		grid-template-columns: 1fr;
	}
`;
