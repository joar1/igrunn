import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About() {
	return (
		<>
			<Navbar />
			<AboutContainer>
				<AboutDiv>
					<h1>Om oss</h1>
					<h3>Tor Eggebø:</h3>
					<ul>
						<li>
							Master i geologi fra UiT, 2007. Han har jobbet ca. 13 år med
							boring av brønner i nordsjøen, for så å ta videreutdanning i
							Sveits (Deep geothermal systems). Jobbet ca. 3 år hos Asplan Viak
							AS, som rådgiver grunnvarme, før han startet i grunnen.no.
						</li>
						<li>«Brønnborer»</li>
						<li>
							Fagprøve innen bergsprenging i 2005, og har deretter jobbet som
							skytebas via eget firma i 15 år.
						</li>
					</ul>
				</AboutDiv>
				<AboutDiv>
					<h3>Våre samarbeidspartnere:</h3>
					<p>VVS</p>
				</AboutDiv>
			</AboutContainer>
			<Footer />
		</>
	);
}

export default About;

const AboutContainer = styled.div`
	height: 100vh;
	line-height: 1.6em;
`;

const AboutDiv = styled.div`
	width: 70%;
	justify-content: center;
	margin: 2em auto;

	h1 {
		margin: 1em 0;
	}
	h3 {
		margin: 0.6em 0;
		text-decoration: underline;
	}
	ul {
		width: 60%;
		margin: auto;
	}
`;
