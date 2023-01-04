import styled from 'styled-components';

export function CardLeft(props) {
	return (
		<CardContainer>
			<CardDivLeft>
				<img src={props.img} alt='#' />
				<StyledP1Left>{props.paragraph}</StyledP1Left>
				<StyledP2Left>{props.paragraphTwo}</StyledP2Left>
				<a href={props.link} target='_blank' rel='noreferrer'>
					{props.linkName}
				</a>
			</CardDivLeft>
		</CardContainer>
	);
}

export function CardRight(props) {
	return (
		<CardContainer>
			<CardDivRight>
				<StyledP1Right>{props.paragraph}</StyledP1Right>
				<StyledP2Right>{props.paragraphTwo}</StyledP2Right>
				<StyledP3Right>{props.paragraphThree}</StyledP3Right>
				<img src={props.img} alt='#' />
			</CardDivRight>
		</CardContainer>
	);
}

const CardContainer = styled.div`
	margin: 0 auto;
	width: 100%;
`;

const CardDivLeft = styled.div`
	display: grid;
	grid-template: repeat(2, 1fr) / repeat(3, 1fr);
	text-align: left;
	word-wrap: normal;
	line-height: 2em;
	margin: 0 auto;
	width: 80%;
	padding: 1em;
	img {
		grid-row: 1;
		grid-column: 1;
		height: 512px;
		width: 560px;
	}
	a {
		display: flex;
		justify-content: center;
		grid-column: 1;
		grid-row: 1;
		font-size: 1.3em;
		padding: 0.1em;
		font-weight: bold;
		color: blue;
		text-decoration: none;
		/* text-underline-offset: 0.3em; */
	}
`;

const StyledP1Left = styled.p`
	display: flex;
	justify-content: center;
	align-items: center;
	grid-row: 1;
	grid-column: 2 / 4;
	font-size: 1.8em;
	padding: 2em;
`;
const StyledP2Left = styled.p`
	display: flex;
	justify-content: center;
	align-items: center;
	grid-row: 2;
	grid-column: 1 / 4;
	padding: 2em;
	font-size: 2.5em;
`;

const CardDivRight = styled.div`
	display: grid;
	grid-template: repeat(3, 1fr) / repeat(3, 1fr);
	text-align: left;
	word-wrap: normal;
	line-height: 2em;
	margin: 10em auto 0 auto;
	width: 80%;
	padding: 1em;
	img {
		grid-row: 1;
		grid-column: 1;
		height: 512px;
		width: 560px;
	}
`;

const StyledP1Right = styled.p`
	display: flex;
	justify-content: center;
	align-items: center;
	grid-row: 1;
	grid-column: 2 / 4;
	font-size: 1.8em;
	padding: 2em;
`;

const StyledP2Right = styled.p`
	display: flex;
	justify-content: center;
	align-items: center;
	grid-row: 2;
	grid-column: 1 / 4;
	padding: 2em;
	font-size: 2.5em;
`;

const StyledP3Right = styled.p`
	display: flex;
	justify-content: center;
	align-items: center;
	grid-row: 3;
	grid-column: 1 / 4;
	padding: 2em;
	font-size: 2.5em;
`;
