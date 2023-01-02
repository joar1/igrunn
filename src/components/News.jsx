import styled from 'styled-components';

function News(props) {
	return (
		<NewsContainer>
			<img src={props.img} alt='noreferrer' />
			<h2>{props.title}</h2>
			<h3>{props.subTitle}</h3>
			<p>{props.paragraph}</p>
			<a href={props.link} target='_blank' rel='noreferrer'>
				{props.linkName}
			</a>
		</NewsContainer>
	);
}

export default News;

const NewsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: left;
	width: 33%;
	line-height: 1.4;
	padding: 0.5em;
	margin: 0.5em;
	background: #fffdfa;
	h2 {
		margin-bottom: 0.8em;
		text-align: left;
		text-decoration: underline;
		text-underline-offset: 0.3em;
	}
	a {
		margin-top: 0.5em;
		font-weight: bold;
		color: blue;
		text-decoration: none;
		/* text-underline-offset: 0.3em; */
	}
	img {
		height: 50%;
		width: 100%;
		object-fit: contain;
	}
`;
