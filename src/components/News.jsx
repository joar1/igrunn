import styled from 'styled-components';

function News(props) {
	return (
		<NewsContainer>
			<NewsDiv>
				<img src={props.img} alt='noreferrer' />
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
	display: grid;
	justify-content: center;
	line-height: 1.4;
	margin: 1em;
`;

const NewsDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	width: 50%;
	padding: 0.5em;
	border: solid 0.2em black;
	h2 {
		margin-bottom: 0.5em;
		text-align: center;
		text-decoration: underline;
		text-underline-offset: 0.3em;
	}
	h3 {
		margin-bottom: 0.5em;
	}
	p {
		margin-bottom: 0.5em;
	}
	a {
		font-weight: bold;
		color: blue;
		text-underline-offset: 0.3em;
	}
	img {
		height: 300px;
		width: 300px;
		object-fit: contain;
	}
`;
