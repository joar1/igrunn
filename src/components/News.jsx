import styled from 'styled-components';

function News(props) {
	return (
		<NewsContainer>
			<a href={props.link} target='_blank' rel='noreferrer'>
				<img src={props.img} alt='noreferrer' />
			</a>
			<a href={props.link} target='_blank' rel='noreferrer'>
				<h2>{props.title}</h2>
			</a>

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
	line-height: 1.4;
	width: 80%;
	border-radius: 18px;
	padding: 1em 2em;
	margin: 1em;
	background: #231e1a;
	h2 {
		margin-bottom: 0.8em;
		text-align: left;
		text-decoration: underline;
		text-underline-offset: 0.3em;
		color: orange;
		text-shadow: red 1px 0 10px;
	}
	h3 {
		color: white;
	}
	a {
		margin-top: 0.5em;
		font-weight: bold;
		color: #8acae6;
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
