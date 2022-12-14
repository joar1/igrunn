import styled from 'styled-components';

function FormInput() {
	return (
		<>
			<StyledForm>
				<StyledH2>Spørsmål</StyledH2>
				<StyledDiv>
					<label>Skriv inn din adresse.</label>
					<input type='text' name='name' />
				</StyledDiv>
				<StyledDiv>
					<label>
						Vet du totalt årsforbruk i kWt for bolig forrige år, eller gjerne
						snitt fra 3 siste år? (Kan hentes på «Min side» hos nettleie-
						og/eller strømleverandør. Dersom ikke, la være blankt.)
					</label>
					<input type='number' name='kwt' />
				</StyledDiv>
				<StyledDiv>
					<label>Bruksareal på bolig (m2)?</label>
					<input type='number' name='m2' />
				</StyledDiv>
				<StyledDiv>
					<label>Byggeår bolig?</label>
					<input type='number' name='buildYear' />
				</StyledDiv>
				<StyledDiv>
					<label>Er bolig etterisolert?</label>
					<input type='checkbox' name='isolation' />
				</StyledDiv>
				<StyledDiv>
					<label>Hvor mange husstandsmedlemmer?</label>
					<input />
				</StyledDiv>
				<StyledDiv>
					<label>Har dere badekar?</label>
					<input type='checkbox' name='bathtub' />
				</StyledDiv>
				<StyledDiv>
					<label>Har boligen et kjølebehov?</label>
					<input type='checkbox' name='cold' />
				</StyledDiv>
				<StyledDiv>
					<label>
						Har dere vannbåren varme, eller ønsker dere tilbud på dette?
					</label>
					<input type='text' name='waterHeat' />
				</StyledDiv>
				<StyledDiv>
					<label>
						Har dere allerede bestilt varmepumpe, og hva er i tilfelle
						effektstørrelse (kW).?
					</label>
					<input type='text' name='heatPump' />
				</StyledDiv>
				<StyledDiv>
					<label>Til slutt, har dere noen kommentarer eller ønsker?</label>
					<input type='text' name='comment' />
				</StyledDiv>
			</StyledForm>
		</>
	);
}

export default FormInput;

const StyledH2 = styled.h2`
	font-size: 3em;
	text-align: center;
	text-decoration: underline;
	text-underline-offset: 0.3em;
	margin-bottom: 1em;
`;

const StyledForm = styled.form`
	margin: 2em auto;
	padding: 1em;
	width: 100%;
	background: #bbbbbb;
`;

const StyledDiv = styled.div`
	display: flex;
	margin: 0 auto;
	margin-bottom: 1em;
	width: 60%;
	font-size: 1.3em;
	line-height: 1.4;

	label {
		width: 50%;
		margin-bottom: 0.2em;
	}

	input {
		width: 30%;
		margin: 0 auto;
		padding: 0.6em;
		font-size: 1.2em;
	}
`;
