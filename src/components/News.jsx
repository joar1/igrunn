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
	border-radius: 5px;
	padding: 2em;
	margin: 0.5em;
	background: #231e1a;
	h2 {
		margin-bottom: 0.8em;
		text-align: left;
		text-decoration: underline;
		text-underline-offset: 0.3em;
		color: orange;
	}
	h3 {
		color: white;
	}
	a {
		margin-top: 0.5em;
		font-weight: bold;
		color: #3f00ff;
		text-decoration: none;
	}
	img {
		max-width: 100%;
		display: block;
		height: 50%;
		width: 100%;
		object-fit: contain;
	}
`;
