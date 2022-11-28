import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About() {
	return (
		<>
			<AboutContainer>
				<Navbar />
				<AboutDiv>
					<h1>Om iGrunn</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
						accusantium velit repudiandae nulla iusto mollitia minima
						voluptatibus totam impedit earum? Itaque reprehenderit tempore aut
						assumenda error fuga, ipsa deleniti! In, incidunt ex vitae
						reiciendis velit quod officiis minima perferendis reprehenderit eius
						fugiat natus eveniet laboriosam harum illum exercitationem autem
						magni debitis atque quo. Debitis sequi minus laborum odio
						architecto? Harum, sed omnis veritatis quasi repudiandae
						exercitationem nostrum sunt voluptatum quas accusantium amet non
						quos totam. Voluptatum, quae obcaecati ipsa vel ullam a perferendis
						quia, porro totam quisquam nobis quos quas? Corrupti repudiandae
						quaerat distinctio libero nobis vitae porro. Mollitia asperiores est
						maiores numquam doloremque laudantium ad. Nihil temporibus deleniti
						suscipit autem voluptas? At debitis deserunt quia tempore repellat
						nostrum nemo fugit aliquid aut vel. Dolorum tenetur at eaque impedit
						cum assumenda corporis earum sed ipsam beatae necessitatibus placeat
						aliquam, ipsa inventore aliquid odit quisquam sunt, ratione
						excepturi voluptas sint quasi a. Placeat itaque magnam ex ut ab quam
						reiciendis quod excepturi, atque ipsam dolore, hic dignissimos
						cupiditate quasi quae magni eligendi libero delectus nesciunt
						explicabo vero repellat harum! Nemo, excepturi? Nemo repellat
						sapiente, error fugiat, tempora, laudantium nam aut labore corporis
						sint atque temporibus facilis voluptas totam tempore in itaque!
						Maxime ea perspiciatis labore recusandae corrupti accusantium porro
						libero molestiae, veniam eum alias aperiam odit maiores. Libero,
						labore exercitationem? Quibusdam aut sint aliquam atque provident,
						harum dolorem quisquam incidunt accusantium id assumenda cum, saepe
						labore hic nemo ipsum temporibus impedit earum praesentium ex velit?
						Velit quaerat at dicta nihil, aliquid facilis voluptatem minima
						omnis aliquam recusandae assumenda consequatur veritatis, doloribus
						necessitatibus placeat labore eligendi ratione molestias odit
						praesentium! Explicabo, consectetur! Vel soluta eaque magni quae
						eius dolore odio, inventore possimus ea, tempore quisquam,
						laudantium consequuntur ullam impedit molestias porro provident enim
						veritatis fuga ad sint facere ipsam! Adipisci dolor similique ipsam
						laudantium id et. Aut enim necessitatibus temporibus ipsa magnam
						quae nemo non dignissimos saepe rerum voluptas illum amet, est
						nostrum exercitationem quos quod veniam similique veritatis corporis
						accusamus praesentium. Voluptatem nostrum, quia pariatur soluta
						eveniet impedit, fuga ea vel non cumque dicta explicabo sint neque
						esse vitae magnam rerum voluptate ut veritatis quis earum. Commodi
						assumenda impedit quo dolor, adipisci consequatur eos ipsa ducimus
						eveniet laborum aperiam veritatis expedita facilis quisquam
						doloribus dolorum. Blanditiis voluptatem cumque odit, perspiciatis
						placeat distinctio. Repudiandae quas rerum natus atque consequatur
						asperiores assumenda perferendis accusantium dolore aspernatur illum
						quidem, magni ipsam laboriosam fugit laborum.
					</p>
				</AboutDiv>
			</AboutContainer>
			<Footer />
		</>
	);
}

export default About;

const AboutContainer = styled.div`
	text-align: center;
	line-height: 1.4em;
	background: black;
`;

const AboutDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	padding: 0 20em;
	background: linear-gradient(
		227deg,
		rgba(2, 0, 36, 1) 0%,
		rgba(76, 216, 135, 1) 35%,
		rgba(0, 212, 255, 1) 100%
	);

	h1 {
		margin-bottom: 2em;
	}
`;
