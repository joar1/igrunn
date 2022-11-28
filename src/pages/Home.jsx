import styled from 'styled-components';
import Navbar from '../components/Navbar';
import BackgroundImg from '../images/background.jpg';
import Footer from '../components/Footer';
import Hole from '../images/hole.jpg';
import ManholeCover from '../images/manhole.jpg';
import Relax from '../images/relax.jpg';
import Hole2 from '../images/hole2.jpg';
import { CardRight, CardLeft } from '../components/Card';

function Home() {
	return (
		<>
			<HomeContainer>
				<BgImg>
					<Navbar />
					<h1>iøynefallende overskrift</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quod
						velit magni saepe nihil soluta impedit laboriosam officiis ipsum
						fugiat optio, tempora, repellat autem molestiae voluptas laudantium
						officia accusantium dolorem. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Veniam quod velit magni saepe nihil soluta impedit
						laboriosam officiis ipsum fugiat optio, tempora, repellat autem
						molestiae voluptas laudantium officia accusantium dolorem. Lorem
						ipsum dolor sit amet consectetur adipisicing elit. Veniam quod velit
						magni saepe nihil soluta impedit laboriosam officiis ipsum fugiat
						optio, tempora, repellat autem molestiae voluptas laudantium officia
						accusantium dolorem. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Veniam quod velit magni saepe nihil soluta impedit
						laboriosam officiis ipsum fugiat optio, tempora, repellat autem
						molestiae voluptas laudantium officia accusantium dolorem. Lorem
						ipsum dolor sit amet consectetur adipisicing elit. Veniam quod velit
						magni saepe nihil soluta impedit laboriosam officiis ipsum fugiat
						optio, tempora, repellat autem molestiae voluptas laudantium officia
						accusantium dolorem. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Veniam quod velit magni saepe nihil soluta impedit
						laboriosam officiis ipsum fugiat optio, tempora, repellat autem
						molestiae voluptas laudantium officia accusantium dolorem. Lorem
						ipsum dolor sit amet consectetur adipisicing elit. Veniam quod velit
						magni saepe nihil soluta impedit laboriosam officiis ipsum fugiat
						optio, tempora, repellat autem molestiae voluptas laudantium officia
						accusantium dolorem. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Veniam quod velit magni saepe nihil soluta impedit
						laboriosam officiis ipsum fugiat optio, tempora, repellat autem
						molestiae voluptas laudantium officia accusantium dolorem. Lorem
						ipsum dolor sit amet consectetur adipisicing elit. Veniam quod velit
						magni saepe nihil soluta impedit laboriosam officiis ipsum fugiat
						optio, tempora, repellat autem molestiae voluptas laudantium officia
						accusantium dolorem. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Veniam quod velit magni saepe nihil soluta impedit
						laboriosam officiis ipsum fugiat optio, tempora, repellat autem
						molestiae voluptas laudantium officia accusantium dolorem. Lorem
						ipsum dolor sit amet consectetur adipisicing elit. Veniam quod velit
						magni saepe nihil soluta impedit laboriosam officiis ipsum fugiat
						optio, tempora, repellat autem molestiae voluptas laudantium officia
						accusantium dolorem. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Veniam quod velit magni saepe nihil soluta impedit
						laboriosam officiis ipsum fugiat optio, tempora, repellat autem
						molestiae voluptas laudantium officia accusantium dolorem. Lorem
						ipsum dolor sit amet consectetur adipisicing elit. Veniam quod velit
						magni saepe nihil soluta impedit laboriosam officiis ipsum fugiat
						optio, tempora, repellat autem molestiae voluptas laudantium officia
						accusantium dolorem. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Veniam quod velit magni saepe nihil soluta impedit
						laboriosam officiis ipsum fugiat optio, tempora, repellat autem
						molestiae voluptas laudantium officia accusantium dolorem. Lorem
						ipsum dolor sit amet consectetur adipisicing elit. Veniam quod velit
						magni saepe nihil soluta impedit laboriosam officiis ipsum fugiat
						optio, tempora, repellat autem molestiae voluptas laudantium officia
						accusantium dolorem. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Veniam quod velit magni saepe nihil soluta impedit
						laboriosam officiis ipsum fugiat optio, tempora, repellat autem
						molestiae voluptas laudantium officia accusantium dolorem. Lorem
						ipsum dolor sit amet consectetur adipisicing elit. Veniam quod velit
						magni saepe nihil soluta impedit laboriosam officiis ipsum fugiat
						optio, tempora, repellat autem molestiae voluptas laudantium officia
						accusantium dolorem.
					</p>
				</BgImg>
			</HomeContainer>
			<HeaderH1>Slik fungerer det</HeaderH1>
			<CardLeft
				img={Hole}
				number='1'
				description='Beskrivelse'
				paragraph='Paragraf'
			/>
			<CardRight
				img={ManholeCover}
				number='2'
				description='Beskrivelse'
				paragraph='Paragraf'
			/>
			<CardLeft
				img={Relax}
				number='3'
				description='Beskrivelse'
				paragraph='Paragraf'
			/>
			<CardRight
				img={Hole2}
				number='4'
				description='Beskrivelse'
				paragraph='Paragraf'
			/>
			<Footer />
		</>
	);
}

export default Home;

const HomeContainer = styled.div`
	line-height: 1.4em;
	text-shadow: 3.2px 1.1px black;
	color: #d0c8c8;
	img {
		object-fit: contain;
		width: auto;
		height: auto;
	}
	h1 {
		margin-top: 0rem;
		padding-top: 1em;
		font-size: 5em;
		text-align: center;
		font-weight: bold;
		color: gold;
	}
	p {
		padding: 3em 10em;
		font-size: 1.2em;
		font-weight: 600;
		text-align: center;
		color: white;
	}
`;

const BgImg = styled.div`
	background-image: url(${BackgroundImg});
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

const HeaderH1 = styled.h1`
	padding: 1em 0;
	font-size: 3.5em;
	text-align: center;
`;
