import styled from 'styled-components';

function Questions() {
	return (
		<QuestionContainer>
			<h2>Spørsmål</h2>
			<p>Skriv inn din adresse.</p>
			<p>
				Vet du totalt årsforbruk i kWt for bolig forrige år, eller gjerne snitt
				fra 3 siste år? Kan hentes på «Min side» hos nettleie- og/eller
				strømleverandør. Dersom ikke, la være blankt.
			</p>
			<p>Bruksareal på bolig (m2)?</p>
			<p>Byggeår bolig?</p>
			<p>Er bolig etterisolert?</p>
			<p>Hvor mange husstandsmedlemmer?</p>
			<p>Har dere badekar?</p>
			<p>Har boligen et kjølebehov?</p>
			<p>Har dere vannbåren varme, eller ønsker dere tilbud på dette?</p>
			<p>
				Har dere allerede bestilt varmepumpe, og hva er i tilfelle
				effektstørrelse (kW).?
			</p>
			<p>Til slutt, har dere noen kommentarer eller ønsker?</p>
			{<br />}
			<p>Send inn og be om tilbud.</p>
		</QuestionContainer>
	);
}

export default Questions;

const QuestionContainer = styled.div`
	color: black;
	width: 40%;
	margin: 2em auto;

	h2 {
		text-align: center;
		text-decoration: underline;
	}

	p {
		margin: 0.5em 0;
	}
`;
