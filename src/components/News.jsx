import styled from 'styled-components';

function News(props) {
	return (
		<NewsContainer>
			<NewsDiv>
				<h2>{props.title}</h2>
				<h3>{props.subTitle}</h3>
				<p>{props.paragraph}</p>
				<p>{props.paragraphOne}</p>
				<p>{props.paragraphTwo}</p>
				<p>{props.paragraphThree}</p>
				<p>{props.paragraphFour}</p>
				<p>{props.paragraphFive}</p>
				<a href={props.link} target='_blank' rel='noreferrer'>
					{props.linkName}
				</a>
			</NewsDiv>
		</NewsContainer>
	);
}

export default News;

const NewsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	margin: 0;
	padding: 0;
	line-height: 1.4;
`;

const NewsDiv = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	width: 80%;
	margin: 1em;
	padding: 1em;
	h2 {
		margin-bottom: 0.5em;
		text-align: center;
		text-decoration: underline;
		text-underline-offset: 0.3em;
	}
	h3 {
		margin-bottom: 0.6em;
	}
	p {
		margin-bottom: 0.5em;
	}
	a {
		font-weight: bold;
		color: blue;
		text-underline-offset: 0.3em;
	}
`;
