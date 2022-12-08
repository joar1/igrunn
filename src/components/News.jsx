import styled from 'styled-components';

function News(props) {
	return (
		<NewsContainer>
			<NewsDiv>
				<img src={props.img} alt='noreferrer' />
				<h2>{props.title}</h2>
				<h3>{props.subTitle}</h3>
				<p>{props.paragraph}</p>
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
	justify-content: center;
	line-height: 1.4;
	margin: 2em auto;
	padding: 2em 0;
`;

const NewsDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 40%;
	padding: 0.5em;
	margin-bottom: 0.5em;

	h2 {
		margin-bottom: 0.5em;
		text-align: center;
		text-decoration: underline;
		text-underline-offset: 0.3em;
	}

	a {
		font-weight: bold;
		color: blue;
		text-underline-offset: 0.3em;
	}
	img {
		height: 40%;
		width: 100%;
		object-fit: contain;
	}
`;
