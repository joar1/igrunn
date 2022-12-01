import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Questions from '../components/Questions';
import BackgroundImg from '../images/background.jpg';
import Footer from '../components/Footer';
import Bilde1 from '../images/bilde1.jpg';
import Bilde1NoBg from '../images/bilde1-nobg.png';
import Bilde2 from '../images/bilde2.jpg';
import Bilde3 from '../images/bilde3.JPG';
import Bilde4 from '../images/bilde4.jpg';
import Bilde5 from '../images/bilde5.jpg';
import Bilde6 from '../images/bilde6.JPG';
import Bilde7 from '../images/bilde7.PNG';
import { Link } from 'react-router-dom';
import { CardRight, CardLeft } from '../components/Card';

function Home() {
	return (
		<>
			<Navbar />
			<CardRight
				img={Bilde1NoBg}
				title='Energien henter du fra Igrunnen'
				description='Betydelig redusert strømregning og økt komfort på samme tid, er det mulig? Ved bruk av grunnvarme fra energibrønn og varmepumpe kan du redusere strømforbruk med opptil 50 % samtidig som du øker komforten innomhus. Endelig får du brønnboring og VVS på samme sted, hvor vi i tillegg har vurdert lokale grunnforhold sett i sammenheng med antatt energiforbruk, slik at grunnvarmeanlegget blir optimalisert for nettopp deres bolig.'
				paragraph='
				Slik fungerer det:
				Skriv inn adresse og svar på noen korte spørsmål. Vi vil i løpet av kort tid komme tilbake til deg med foreslått størrelse på varmepumpe og dybde på brønn, og kommer med et tilbud på komplett grunnvarmeanlegg. Har dere allerede bestilt innvending VVS kan vi også levere energibrønnen alene. Dersom det er vannbrønn dere ønsker, klikk her (link til vannbrønn i Tjenester-meny)'
			/>
			<Questions />

			<CardLeft
				id='Grunnvarme'
				img={Bilde2}
				title='Litt om grunnvarme'
				description='Beskrivelse'
				paragraph='Grunnvarme er i all hovedsak oppspart solenergi. Temperaturen i grunnen er stabil året rundt, og holder ofte 1 til 2 grader høyere temperatur enn årsmiddeltemperatur (gjennomsnittlig utetemperatur gjennom et helt år) på stedet. Dette gjelder også når utetemperatur er på sitt kaldeste, og oppvarmingsbehovet for ditt bygg er størst.'
			/>

			<CardRight
				img={Bilde3}
				title='3'
				description='Beskrivelse'
				paragraph='Paragraf'
			/>

			<CardLeft
				img={Bilde4}
				title='4'
				description='Beskrivelse'
				paragraph='Paragraf'
			/>

			<CardRight
				img={Bilde5}
				title='5'
				description='Beskrivelse'
				paragraph='Paragraf'
			/>

			<CardLeft
				img={Bilde6}
				title='6'
				description='Beskrivelse'
				paragraph='Paragraf'
			/>

			<CardRight
				img={Bilde7}
				title='7'
				description='Beskrivelse'
				paragraph='Paragraf'
			/>

			<Footer />
		</>
	);
}

export default Home;

const HomeContainer = styled.div`
	text-shadow: 3.2px 1.1px black;
	color: #d0c8c8;
	img {
		object-fit: contain;
		width: auto;
		height: auto;
	}
	h1 {
		margin-top: 0rem;
		padding-top: 1em;
		font-size: 3em;
		text-align: center;
		font-weight: bold;
		color: gold;
	}
	p {
		line-height: 1.4em;
		padding: 3em 10em;
		font-size: 1.2em;
		font-weight: 600;
		text-align: center;
		color: white;
	}
`;

const BgImg = styled.div`
	background-image: url(${BackgroundImg});
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

const HeaderH1 = styled.h1`
	padding: 0.8em;
	font-size: 3.5em;
	text-align: center;
`;
