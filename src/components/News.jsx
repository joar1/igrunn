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
	align-items: center;
	justify-content: center;
	width: 33%;
	padding: 0.5em;
	margin: 0.5em;
	background: #fffdfa;
	h2 {
		margin-bottom: 0.5em;
		text-align: center;
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
		height: 40%;
		width: 100%;
		object-fit: contain;
	}
`;

// const NewsDiv = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	justify-content: center;
// 	width: 20%;
// 	padding: 0.5em;
// 	margin-bottom: 0.5em;
// 	border: solid 0.2em red;
// 	h2 {
// 		margin-bottom: 0.5em;
// 		text-align: center;
// 		text-decoration: underline;
// 		text-underline-offset: 0.3em;
// 	}
// 	a {
// 		margin-top: 0.5em;
// 		font-weight: bold;
// 		color: blue;
// 		text-underline-offset: 0.3em;
// 	}
// 	img {
// 		height: 40%;
// 		width: 100%;
// 		object-fit: contain;
// 	}
// `;
