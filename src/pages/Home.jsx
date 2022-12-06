import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Questions from '../components/Questions';
import Footer from '../components/Footer';
import Bilde1NoBg from '../images/bilde1-nobg.png';
import Bilde2 from '../images/bilde2.jpg';
import Bilde3 from '../images/bilde3.JPG';
import Bilde4 from '../images/bilde4.jpg';
import Bilde5 from '../images/bilde5.jpg';
import Bilde6 from '../images/bilde6.JPG';
import Bilde7 from '../images/bilde7.PNG';
import { CardRight, CardLeft } from '../components/Card';
import Email from '../components/Email';

function Home() {
	return (
		<>
			<HomeContainer>
				<Navbar />

				<HeaderIgrunn>Energien henter du fra Igrunnen</HeaderIgrunn>

				<IntroH2>
					Betydelig redusert strømregning og økt komfort på samme tid, er det
					mulig? Ved bruk av grunnvarme fra energibrønn og varmepumpe kan du
					redusere strømforbruk med opptil 50 % samtidig som du øker komforten
					innomhus. Endelig får du brønnboring og VVS på samme sted, hvor vi i
					tillegg har vurdert lokale grunnforhold sett i sammenheng med antatt
					energiforbruk, slik at grunnvarmeanlegget blir optimalisert for
					nettopp deres bolig.
				</IntroH2>

				<CardRight
					img={Bilde1NoBg}
					paragraph='Slik fungerer det:
				Skriv inn adresse og svar på noen korte spørsmål. Vi vil i løpet av kort tid komme tilbake til deg med foreslått størrelse på varmepumpe og dybde på brønn, og kommer med et tilbud på komplett grunnvarmeanlegg. Har dere allerede bestilt innvending VVS kan vi også levere energibrønnen alene. Dersom det er vannbrønn dere ønsker, klikk her (link til vannbrønn i Tjenester-meny)'
				/>

				<StyledH3>
					Lurer du på mer om teknologien, eller om den passer for deg, kan du
					klikke deg inn {<a href='#Grunnvarme'>HER</a>} eller {''}
					{<a href='#MinBolig'>HER</a>} før du svarer på spørsmålene under
				</StyledH3>

				<Questions />

				<HeaderH1 id='Grunnvarme'>Litt om grunnvarme</HeaderH1>

				<CardLeft
					img={Bilde2}
					link='https://renewableenergyhub.co.uk/main/heat-pumps-information/ground-source-heat-pumps/'
					linkName='Grunnvarmepumpe'
					paragraph='Grunnvarme er i all hovedsak oppspart solenergi. Temperaturen i grunnen er stabil året rundt, og holder ofte 1 til 2 grader høyere temperatur enn årsmiddeltemperatur (gjennomsnittlig utetemperatur gjennom et helt år) på stedet. Dette gjelder også når utetemperatur er på sitt kaldeste, og oppvarmingsbehovet for ditt bygg er størst.'
					paragraphTwo='Teknologien er velkjent og ferdig utprøvd gjennom flere tiår. Energibrønnen er utstyrt med en kolloktorslange fylt med miljøvennlig kjølevæske. Denne væsken sirkulerer fra borehullet, opp til en varmepumpe som løfter temperaturen ytterligere til gulvvarme og radiatortemperatur, for så å returnere til brønnen for å bli oppvarmet nytt.'
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

				<HeaderH1 id='MinBolig'>Passer dette min bolig?</HeaderH1>

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

				<Footer />
			</HomeContainer>
		</>
	);
}

export default Home;

const HomeContainer = styled.div`
	background: #fffdfa;
`;

const HeaderIgrunn = styled.h1`
	padding: 1.2em 0 1em 0;
	font-size: 4em;
	text-align: center;
	color: orange;
`;

const IntroH2 = styled.h2`
	margin: 0 auto;
	font-weight: bold;
	padding: 1em 0 3em 0;
	width: 75%;
	text-align: center;
`;

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
		border-radius: 50px;
	}
`;

const StyledH3 = styled.h3`
	width: 60%;
	text-align: center;
	word-wrap: normal;
	margin: 0 auto;
	margin-bottom: 4em;
	a {
		text-decoration: none;
		color: blue;
	}
`;

const StyledParagraph = styled.p`
	width: 60%;
	text-align: center;
	word-wrap: normal;
	margin: 0 auto;
	margin-bottom: 2em;
`;
