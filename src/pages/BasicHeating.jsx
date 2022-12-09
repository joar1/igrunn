import { CardLeft, CardRight } from '../components/Card';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Bilde2 from '../images/bilde2.jpg';
import Bilde3 from '../images/bilde3.JPG';
import Bilde4 from '../images/bilde4.jpg';
import Bilde5 from '../images/bilde5.jpg';

function BasicHeating() {
	return (
		<>
			<Navbar />
			<HeaderH1 id='Grunnvarme'>Litt om grunnvarme</HeaderH1>

			<CardLeft
				img={Bilde2}
				paragraph='Grunnvarme er i all hovedsak oppspart solenergi. Temperaturen i grunnen er stabil året rundt, og holder ofte 1 til 2 grader høyere temperatur enn årsmiddeltemperatur (gjennomsnittlig utetemperatur gjennom et helt år) på stedet. Dette gjelder også når utetemperatur er på sitt kaldeste, og oppvarmingsbehovet for ditt bygg er størst.'
				paragraphTwo='Teknologien er velkjent og ferdig utprøvd gjennom flere tiår. Energibrønnen er utstyrt med en kolloktorslange fylt med miljøvennlig kjølevæske. Denne væsken sirkulerer fra borehullet, opp til en varmepumpe som løfter temperaturen ytterligere til gulvvarme og radiatortemperatur, for så å returnere til brønnen for å bli oppvarmet nytt.'
				link='https://renewableenergyhub.co.uk/main/heat-pumps-information/ground-source-heat-pumps/'
				linkName='renewableenergyhub.co.uk'
			/>

			<CardRight
				img={Bilde3}
				paragraph='Energien som kreves er elektrisitet for å drive varmepumpe. Dersom varmepumpa har en virkningsgrad (COP) på 4,0, betyr dette at 1 kW strøm trengs for å få 4,0 kW «gratis» fra grunnen, altså en reduksjon på 80 % sammenlignet med bruk av elkjel til samme formål.'
				paragraphTwo='ENOVA anslår at andelen energi benyttet til oppvarming av en gjennomsnittlig norsk bolig er 55%, men at andelen kan være så høy som 80 ved store, dårlig isolerte bygg, og nede i 30 – 40 % i nye, godt isolerte bygg. Her kan det altså være mye å spare.'
				paragraphThree='Avtrykket et minimalt - brønnløkket er i grunnen det eneste du ser. Ingen klimautslipp annet enn ved boring av brønn, og her benytter vi oss av miljødiesel for å holde dette på sitt laveste. Levetiden på brønnen er 50-100 år, og levertid for varmepumpe er ca 20 år.'
			/>

			<ImageContainer>
				<img src={Bilde4} alt='#' />
				<img src={Bilde5} alt='#' />
			</ImageContainer>
			<Footer />
		</>
	);
}

export default BasicHeating;

const HeaderH1 = styled.h1`
	padding: 0.8em;
	font-size: 3.5em;
	text-align: center;
	color: orange;
`;

const ImageContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	margin: 5em auto;
	width: 100%;
	img {
		height: 600px;
		width: 600px;
		border-radius: 20px;
	}
`;
