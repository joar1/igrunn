import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About() {
	return (
		<>
			<AboutWrapper>
				<Navbar />
				<AboutContainer>
					<AboutDiv>
						<h1>Om oss</h1>
						<h3>Tor Eggebø:</h3>
						<ul>
							<li>
								Master i geologi fra UiT, 2007. Han har jobbet ca. 13 år med
								boring av brønner i nordsjøen, for så å ta videreutdanning i
								Sveits (Deep geothermal systems). Jobbet ca. 3 år hos Asplan
								Viak AS, som rådgiver grunnvarme, før han startet igrunnen.no.
							</li>
							<li>«Brønnborer»</li>
							<li>
								Fagprøve innen bergsprenging i 2005, og har deretter jobbet som
								skytebas via eget firma i 15 år.
							</li>
						</ul>
					</AboutDiv>
					<AboutDivPartners>
						<h3>Våre samarbeidspartnere:</h3>
						<ul>
							<li>VVS-firma</li>
						</ul>
					</AboutDivPartners>
				</AboutContainer>
				<Footer />
			</AboutWrapper>
		</>
	);
}

export default About;

const AboutWrapper = styled.div`
	line-height: 1.3;
	background: #231e1a;
	color: white;
	@media (max-width: 768px) {
		max-width: 100%;
	}
`;

const AboutContainer = styled.div`
	border-radius: 25px;
	background: #121212;
	width: 75%;
	margin: 5em auto;
`;

const AboutDiv = styled.div`
	width: 75%;
	justify-content: center;
	margin: 5em auto 8em auto;
	padding: 5em 5em 0 5em;
	@media (max-width: 768px) {
		width: 100%;
		font-size: 2vw;
	}
	h1 {
		margin: 0 auto;
		text-align: center;
		font-size: 4em;
		color: orange;
	}
	h3 {
		margin: 1em 0;
		text-decoration: underline;
		text-underline-offset: 0.3em;
		font-size: 2em;
		color: orange;
		@media (max-width: 768px) {
			font-size: 2vh;
		}
	}
	li {
		width: 90%;
		list-style: none;
		font-size: 2em;
		margin-bottom: 2em;
		margin: 2em auto;
		@media (max-width: 768px) {
			font-size: 2vh;
		}
	}
`;

const AboutDivPartners = styled.div`
	width: 75%;
	justify-content: center;
	margin: 5em auto 8em auto;
	padding: 0 5em 5em 5em;
	@media (max-width: 768px) {
		width: 100%;
		font-size: 2vw;
	}
	h1 {
		margin: 0 auto;
		text-align: center;
		font-size: 4em;
		color: orange;
	}
	h3 {
		margin: 0 0 1em 0;
		text-decoration: underline;
		text-underline-offset: 0.3em;
		font-size: 2em;
		color: orange;
		@media (max-width: 768px) {
			font-size: 2vh;
		}
	}
	li {
		width: 90%;
		list-style: none;
		font-size: 2em;
		margin-bottom: 2em;
		margin: 2em auto;
		@media (max-width: 768px) {
			font-size: 2vh;
		}
	}
`;
