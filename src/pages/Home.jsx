import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Questions from '../components/Questions';
import Footer from '../components/Footer';
import Bilde1NoBg from '../images/bilde1-nobg.png';
import { Link } from 'react-router-dom';
import { CardRight } from '../components/Card';

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
					klikke deg inn {<StyledLink to='/grunnvarme'>HER</StyledLink>} eller{' '}
					{''}
					{<StyledLink to='tilgjenglig'>HER</StyledLink>} før du svarer på
					spørsmålene under
				</StyledH3>

				<Questions />

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

const StyledH3 = styled.h3`
	width: 60%;
	text-align: center;
	word-wrap: normal;
	margin: 0 auto;
	margin-bottom: 4em;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: blue;
`;
