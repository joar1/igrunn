import styled from 'styled-components';
import Navbar from '../components/Navbar';

function News() {
	return (
		<>
			<Navbar />
			<NewsContainer>
				<h1>Nyhetsbrev</h1>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
					fugit.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptas
					facere obcaecati repellat aliquam dicta minima fuga necessitatibus
					tempore molestiae.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolorem,
					vel soluta deserunt minus perspiciatis laudantium natus veniam
					voluptatum reprehenderit nulla eveniet? Libero perferendis distinctio
					itaque et voluptates facere. Dolores!
				</p>
			</NewsContainer>
		</>
	);
}

export default News;

const NewsContainer = styled.div`
	text-align: center;
`;
