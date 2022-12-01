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

const CardContainer = styled.div`
	color: black;
	margin: 0 auto;
	padding-bottom: 2em;
`;

const CardDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 80%;
	margin: 0 auto;
	img {
		height: 350px;
		width: 400px;
		border-radius: 50px;
	}
`;

const TextDiv = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	word-wrap: normal;
	margin: 0;
	width: 10em;
	padding: 2em;
	h2 {
		font-weight: bold;
	}
	h3 {
		margin-top: 0.4em;
	}
	p {
		margin-top: 0.6em;
		font-style: italic;
		word-wrap: break-word;
	}
`;
