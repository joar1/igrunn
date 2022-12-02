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
					<h4>Våre samarbeidspartnere:</h4>
					<p>VVS-firma</p>
				</AboutDiv>
			</AboutContainer>
			<Footer />
		</>
	);
}

export default About;

const AboutContainer = styled.div`
	height: 100vh;
	line-height: 1.3em;
`;

const AboutDiv = styled.div`
	width: 40%;
	justify-content: center;
	margin: 2em auto;

	h1 {
		margin: 1em 0;
		text-align: center;
	}

	h3 {
		margin: 0.6em 0;
		text-decoration: underline;
	}

	h4 {
		margin: 0.6em 0;
		text-decoration: underline;
	}

	p {
		width: 60%;
		margin: 0 auto;
		font-size: 1.3rem;
	}

	ul {
		width: 60%;
		margin: 0 auto;
	}

	li {
		list-style: none;
		font-size: 1.3rem;
		margin-bottom: 1em;
	}
`;
