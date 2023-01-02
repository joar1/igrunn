import styled from 'styled-components';

export function CardLeft(props) {
	return (
		<CardContainer>
			<CardDiv>
				<img src={props.img} alt='#' />

				<TextDivLeft>
					<h2>{props.title}</h2>
					<h3>{props.description}</h3>
					<p>{props.paragraph}</p>
					<p>{props.paragraphTwo}</p>
					<a href={props.link} target='_blank' rel='noreferrer'>
						{props.linkName}
					</a>
					<p>{props.paragraphThree}</p>
				</TextDivLeft>
			</CardDiv>
		</CardContainer>
	);
}

export function CardRight(props) {
	return (
		<CardContainer>
			<CardDiv>
				<TextDiv>
					<h2>{props.title}</h2>
					<h4>{props.description}</h4>
					<p>{props.paragraph}</p>
					<p>{props.paragraphTwo}</p>
					<p>{props.paragraphThree}</p>
				</TextDiv>
				<img src={props.img} alt='#' />
			</CardDiv>
		</CardContainer>
	);
}

const CardContainer = styled.div`
	color: black;
	margin: 0 auto;
	line-height: 2em;
`;

const CardDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 85%;
	margin: 0 auto;
	img {
		height: 700px;
		width: 700px;
		object-fit: contain;
	}
`;

const TextDiv = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	word-wrap: normal;
	padding: 0 2em;
	h2 {
		font-weight: bold;
		font-size: 800;
	}
	h4 {
		margin-top: 0.4em;
	}
	p {
		font-size: 1.5em;
		margin-top: 0.8em;
		width: 80%;
	}
`;

const TextDivLeft = styled.div`
	display: flex;
	flex-direction: column;
	word-wrap: normal;
	padding: 2em;
	h2 {
		font-weight: bold;
		font-size: 800;
	}
	h4 {
		margin-top: 0.4em;
	}
	p {
		text-align: left;
		margin-left: auto;
		margin-top: 0.8em;
		font-size: 1.5em;
		width: 80%;
	}
	a {
		margin: 0 auto;
		font-size: 1.3em;
		text-align: center;
		font-weight: bold;
		color: blue;
		text-underline-offset: 0.3em;
	}
`;
