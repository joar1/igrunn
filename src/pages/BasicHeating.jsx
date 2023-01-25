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
					på sitt kaldeste, og oppvarmingsbehovet for ditt bygg er størst.'
				</p>
			</LeftSection>
			<ParagraphBelowLeftSection>
				Teknologien er velkjent og ferdig utprøvd gjennom flere tiår.
				Energibrønnen er utstyrt med en kolloktorslange fylt med miljøvennlig
				kjølevæske. Denne væsken sirkulerer fra borehullet, opp til en
				varmepumpe som løfter temperaturen ytterligere til gulvvarme og
				radiatortemperatur, for så å returnere til brønnen for å bli oppvarmet
				nytt.'
			</ParagraphBelowLeftSection>

			<RightSection>
				<p>
					Energien som kreves er elektrisitet for å drive varmepumpe. Dersom
					varmepumpa har en virkningsgrad (COP) på 4,0, betyr dette at 1 kW
					strøm trengs for å få 4,0 kW «gratis» fra grunnen, altså en reduksjon
					på 80 % sammenlignet med bruk av elkjel til samme formål.'
				</p>
				<img src={Bilde3} alt='#' />
			</RightSection>

			<ParagraphBelowRightSection>
				ENOVA anslår at andelen energi benyttet til oppvarming av en
				gjennomsnittlig norsk bolig er 55%, men at andelen kan være så høy som
				80 ved store, dårlig isolerte bygg, og nede i 30 – 40 % i nye, godt
				isolerte bygg. Her kan det altså være mye å spare.'
			</ParagraphBelowRightSection>
			<ParagraphBelowRightSectionOrange>
				Avtrykket et minimalt - brønnløkket er i grunnen det eneste du ser.
				Ingen klimautslipp annet enn ved boring av brønn, og her benytter vi oss
				av miljødiesel for å holde dette på sitt laveste. Levetiden på brønnen
				er 50-100 år, og levertid for varmepumpe er ca 20 år.'
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
	display: grid;
	background: #231e1a;
	color: white;
	grid-template-columns: 1fr;
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
		font-size: 1.8em;
		text-align: left;
	}
	img {
		height: 512px;
		width: 560px;
		border-radius: 20px;
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
		font-size: 1.8em;
		text-align: left;
	}
	img {
		height: 512px;
		width: 560px;
		border-radius: 20px;
	}
`;

const ParagraphBelowRightSection = styled.p`
	width: 85%;
	margin: 0 auto;
	padding: 0.5em 0;
	line-height: 1.4;
	font-size: 2em;
	text-align: left;
`;

const ParagraphBelowRightSectionOrange = styled.p`
	width: 85%;
	margin: 0 auto;
	line-height: 1.4;
	padding: 0.5em 0;
	font-size: 2em;
	color: orange;
	text-align: left;
`;

const ImageContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	margin: 5em auto;
	width: 85%;
	img {
		max-width: 100%;
		height: 512px;
		width: 560px;
		border-radius: 20px;
	}
`;
