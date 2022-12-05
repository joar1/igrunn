import styled from 'styled-components';

export function CardLeft(props) {
	return (
		<CardContainer>
			<CardDiv>
				<ImageLink>
					<img src={props.img} alt='#' />
					<a href={props.link} target='_blank' rel='noreferrer'>
						{props.linkName}
					</a>
				</ImageLink>

				<TextDivLeft>
					<h2>{props.title}</h2>
					<h3>{props.description}</h3>
					<p>{props.paragraph}</p>
					<p>{props.paragraphTwo}</p>
					<p>{props.paragraphThree}</p>
					<p>{props.paragraphFour}</p>
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
					<p>{props.paragraphFour}</p>
				</TextDiv>

				<ImageLink>
					<img src={props.img} alt='#' />
					<a href={props.link} target='_blank' rel='noreferrer'>
						{props.linkName}
					</a>
				</ImageLink>
			</CardDiv>
		</CardContainer>
	);
}

const CardContainer = styled.div`
	color: black;
	margin: 0 auto;
	line-height: 1.3em;
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
	padding: 0 2em;
	h2 {
		font-weight: bold;
		font-size: 800;
	}
	h4 {
		margin-top: 0.4em;
	}
	p {
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
		width: 80%;
	}
`;

const ImageLink = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	a {
		font-weight: bold;
		margin-top: 1em;
		color: blue;
		text-underline-offset: 0.3em;
	}
`;
