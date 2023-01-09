import styled from 'styled-components';
import { RiCheckboxCircleLine } from 'react-icons/ri';

function Modal({ closeModal }) {
	return (
		<ModalBackground>
			<ModalContainer>
				<p>
					<StyledCheckbox>
						<RiCheckboxCircleLine />
					</StyledCheckbox>
					Takk for at du sendte inn dine svar,{<br />} vi vil ta kontakt med deg
					snarest.
				</p>
				<ModalButton
					onClick={() => {
						closeModal(false);
					}}
				>
					OK!
				</ModalButton>
			</ModalContainer>
		</ModalBackground>
	);
}

export default Modal;

const ModalBackground = styled.div`
	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	background: black;
`;

const ModalContainer = styled.div`
	background: white;
	text-align: center;
	margin: 10em auto;
	padding: 2em;
	width: 40%;
	border-radius: 12px;
	p {
		color: black;
		font-size: 1.4em;
	}
`;

const ModalButton = styled.button`
	margin-top: 1.3em;
	display: inline-block;
	position: relative;
	padding: 10px 30px;
	border-radius: 3px;
	font-size: 14px;
	font-weight: 400;
	background: green;
	border: none;
	color: #ffffff;
	&:hover {
		transform: translateY(0) scale(1.1);
	}
`;

const StyledCheckbox = styled.div`
	color: #90ee90;
	font-size: 1.8em;
	margin: 0;
`;
