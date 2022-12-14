import styled from 'styled-components';
import Navbar from '../components/Navbar';
import News from '../components/News';
import Questions from '../components/Questions';
import Footer from '../components/Footer';
import BackgroundImg from '../images/background.jpg';
// import Bilde1NoBg from '../images/bilde1-nobg.png';
import { Link } from 'react-router-dom';
import FormInput from '../components/FormInput';
// import { CardRight } from '../components/Card';

function Home() {
	return (
		<>
			<HomeContainer>
				<Navbar />

				<BackgroundHeader>
					<HeaderIgrunn>Energien henter du fra Igrunnen</HeaderIgrunn>
					<StyledH2Intro>
						Betydelig redusert strømregning og økt komfort på samme tid, er det
						mulig? Ved bruk av grunnvarme fra energibrønn og varmepumpe kan du
						redusere strømforbruk med opptil 50% samtidig som du øker komforten
						innomhus. Endelig får du brønnboring og VVS på samme sted. Vi
						vurderer i tillegg lokale grunnforhold sett i sammenheng med antatt
						energiforbruk, slik at grunnvarmeanlegget blir optimalisert for
						nettopp deres bolig.
					</StyledH2Intro>
				</BackgroundHeader>
				<StyledH2>
					Slik fungerer det: Skriv inn adresse og svar på noen korte spørsmål.
					Vi vil i løpet av kort tid komme tilbake til deg med foreslått
					størrelse på varmepumpe og dybde på brønn, og kommer med et tilbud på
					komplett grunnvarmeanlegg. Har dere allerede bestilt innvending VVS
					kan vi også levere energibrønnen alene. Dersom det er vannbrønn dere
					ønsker, {<StyledLink to='tjenester'>klikk Her</StyledLink>}
				</StyledH2>
				<StyledH2>
					Lurer du på mer om teknologien, eller om den passer for deg, kan du
					klikke deg inn på{' '}
					{<StyledLink to='/grunnvarme'>grunnvarme</StyledLink>} eller {''}
					{<StyledLink to='tilgjenglig'>tilgjenglig</StyledLink>} før du svarer
					på spørsmålene under
				</StyledH2>

				{/* <FormInput /> */}
				<Questions />

				<NewsTitle>Nyheter!</NewsTitle>
				<NewsWrapper>
					<News
						img='https://akamai.vgc.no/v2/images/23e3d3c7-0706-43a7-9173-a348e6b83f23?fit=crop&format=auto&h=800&w=1200&s=8eea665662384552ef2c180d48c6703af4ef4be8'
						title='Grunnvarme avlaster strømnettet'
						subTitle='- Regjeringen er opptatt av at det legges til rette for bruk av energiløsninger som kan bidra til å avlaste kraftsystemet. Dette inkluderer også bergvarme, fremholder Sæter. Både bergvarme og fjernvarme bruker vannbåren varme. Disse energiformene belaster derfor ikke allerede fullastede strømnett.'
						link='https://e24.no/norsk-oekonomi/i/gEdwn1/vil-faa-glemt-energi-opp-og-frem-i-lyset?fbclid=IwAR0ZqKxuw9dT2b4EugRXUyjZtki8y9cmABKyAcrbvlKJZJQth5RdQ8noBfk'
						linkName='- Vil få glemt energi opp og frem i lyset - E24'
					/>

					<News
						img='https://www.tu.no/_next/image?url=https%3A%2F%2Fimages.gfx.no%2F1000x%2F2051%2F2051691%2Fluft-luft%2520kjoling.jpg&w=1080&q=75'
						title='Grunnvarmeanlegg er suverent for både kjøling og oppvarming'
						subTitle='- De som har en varmepumpe basert på bergvarme, er i en enda bedre situasjon når de ønsker å kjøle ned boligen. De trenger ikke kjøre varmepumpa i det hele tatt. Det holder å kjøre sirkulasjonspumpa som flytter væske ned og opp av brønnen som ofte er rundt 200 meter dyp. I fjell er årstemperaturen jevn på noen plussgrader. Det er et overlegent varmereservoar om vinteren, da man slipper det store termiske løftet som luft-til-luft-varmepumper har, men det er overlegent i kjølesesongen også. Da kan man sirkulere «bergkulde» gjennom anlegget uten at pumpa går og det krever svært lite strøm.'
						link='https://www.tu.no/artikler/derfor-er-det-billig-a-kjole-boligen-med-varmepumpe/396348?fbclid=IwAR1EmGDBujY-25OW82quliUNCec5d8h4Wewm-96JolmfCOa7lZMqHEm9mN0'
						linkName='- Derfor er det billig å kjøle boligen med varmepumpe - Tu.no'
					/>
				</NewsWrapper>

				<Footer />
			</HomeContainer>
		</>
	);
}

export default Home;

const HomeContainer = styled.div`
	background: #fffdfa;
`;

const BackgroundHeader = styled.div`
	background-image: url(${BackgroundImg});
	background-size: cover;
	/* opacity: 0.7; */
	background-repeat: no-repeat;
	background-color: rgba(255, 255, 255, 0.486);
	background-blend-mode: overlay;
`;

const HeaderIgrunn = styled.h1`
	padding: 150px 0 280px 0;
	font-size: 4em;
	text-align: center;
	color: black;
`;

const StyledH2Intro = styled.h2`
	border: solid 2px red;
	margin: 150px auto 50px auto;
	font-weight: bold;
	padding: 100px auto;
	width: 70%;
	text-align: left;
`;

const StyledH2 = styled.h2`
	margin: 0 auto;
	font-weight: bold;
	padding: 1em 3em;
	width: 80%;
	text-align: left;
	opacity: 1;
`;

const NewsTitle = styled.h2`
	font-size: 3em;
	text-align: center;
	text-decoration: underline;
	text-underline-offset: 0.3em;
	margin: 0.5em 0;
`;

const NewsWrapper = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	width: auto;
	margin: 0 auto;
	padding: 2em 0;
	background: #e5e5e5;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: blue;
`;
