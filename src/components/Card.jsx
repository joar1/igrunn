import styled from 'styled-components';

export function CardLeft(props) {
	return (
		<CardContainer>
			<CardDiv>
				<img src={props.img} alt='#' />
				<TextDiv>
					<h2>{props.number}</h2>
					<h3>{props.description}</h3>
					<p>{props.paragraph}</p>
				</TextDiv>
			</CardDiv>
		</CardContainer>
	);
}

export function CardRight(props) {
	return (
		<CardContainer>
			<CardDiv>
				<TextDiv>
					<h2>{props.number}</h2>
					<h3>{props.description}</h3>
					<p>{props.paragraph}</p>
				</TextDiv>
				<img src={props.img} alt='#' />
			</CardDiv>
		</CardContainer>
	);
}

// export { CardRight, CardLeft };

const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	color: black;
	margin: 0 auto;
	padding: 2em 0;
`;

const CardDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 80%;
	margin: 1em auto;
	img {
		height: 350px;
		width: 400px;
		border-radius: 50px;
	}
`;

const TextDiv = styled.div`
	align-items: center;
	text-align: left;
	word-wrap: normal;
	object-fit: contain;
	margin: 0;
	padding: 6em 2em;
	h2 {
		font-weight: bold;
	}
	h3 {
		margin-top: 0.4em;
		width: 11em;
	}
	p {
		margin-top: 0.6em;
		font-style: italic;
	}
`;
