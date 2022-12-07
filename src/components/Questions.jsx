import styled from 'styled-components';

function Questions() {
	return (
		<QuestionContainer>
			<h2>Spørsmål</h2>
			<QuestionText>
				<p>Skriv inn din adresse.</p>
				<p>
					Vet du totalt årsforbruk i kWt for bolig forrige år, eller gjerne
					snitt fra 3 siste år? {<br />}Kan hentes på «Min side» hos nettleie-
					og/eller strømleverandør. {<br />} Dersom ikke, la være blankt.
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
			</QuestionText>
		</QuestionContainer>
	);
}

export default Questions;

const QuestionContainer = styled.div`
	color: black;
	margin: 0 auto;
	padding: 2em;
	text-align: center;
	background: lightgrey;
	h2 {
		text-align: center;
		text-decoration: underline;
		text-underline-offset: 0.3em;
		margin: 2em 0;
	}
`;

const QuestionText = styled.p`
	line-height: 1.4;
	width: 50%;
	margin: 2em auto;
	text-align: left;
	p {
		font-size: 1.3em;
	}
`;
