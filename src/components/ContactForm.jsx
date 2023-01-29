import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import Modal from './Modal';

function ContactForm() {
	const form = useRef();
	const [openModal, setOpenModal] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				/* Service-ID */ 'service_pgaca68',
				/* Template-ID */ 'template_oeta769',
				form.current,
				/* Public-Key */ 'ecegCdL455fW10xWe'
			)
			.then(
				(result) => {
					console.log(result.text);
					console.log('message sent');
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
		setOpenModal(true);
	};

	return (
		<ContactContainer>
			<StyledContactForm>
				<h2>Spørsmål</h2>
				<form ref={form} onSubmit={sendEmail}>
					<label>Navn</label>
					<input type='text' name='user_name' required />

					<label>Email</label>
					<input type='email' name='user_email' required />

					<label>Skriv din adresse</label>
					<input type='text' name='user_adresse' required />

					<label>
						Vet du totalt årsforbruk i kWt for bolig forrige år, eller gjerne
						snitt fra 3 siste år? (Kan hentes på «Min side» hos nettleie-
						og/eller strømleverandør.) Dersom ikke, la være blankt.
					</label>
					<input type='number' name='user_kwt' />

					<label>Bruksareal på bolig (m2)?</label>
					<input type='number' name='user_m2' required />

					<label>Byggeår bolig?</label>
					<input type='number' name='user_build' required />

					<label>Er bolig etterisolert?</label>
					<input type='text' name='user_isolation' required />

					<label>Hvor mange husstandsmedlemmer?</label>
					<input type='number' name='user_members' required />

					<label>Har dere badekar?</label>
					<input type='text' name='user_bathtub' required />

					<label>Har boligen et kjølebehov?</label>
					<input type='text' name='user_cooling' required />

					<label>
						Har dere vannbåren varme, eller ønsker dere tilbud på dette?
					</label>
					<input type='text' name='user_water' required />

					<label>
						Har dere allerede bestilt varmepumpe, og hva er i tilfelle
						effektstørrelse (kW).?
					</label>
					<input type='text' name='user_heatPump' required />

					<label>Til slutt, har dere noen kommentarer eller ønsker?</label>
					<textarea name='message' />
					<input type='submit' value='Send' />
					{openModal && <Modal closeModal={setOpenModal} />}
				</form>
			</StyledContactForm>
		</ContactContainer>
	);
}

export default ContactForm;

const ContactContainer = styled.div`
	background: #231e1a;
	color: white;
	width: 100%;
	margin: 0 auto;
`;

const StyledContactForm = styled.div`
	width: 50%;
	margin: 0 auto;
	padding: 3em 0 2em 0;
	h2 {
		font-weight: bold;
		font-size: 5em;
		font-size: 4vw;
		text-align: center;
		text-decoration: underline;
		text-underline-offset: 0.3em;
		margin-bottom: 0.5em;
		color: orange;
		margin-bottom: 0.8em;
		@media (max-width: 768px) {
			font-size: 6vh;
		}
	}
	form {
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		width: 100%;
		font-size: 1.3em;
		input {
			width: 100%;
			height: 35px;
			padding: 7px;
			outline: none;
			border-radius: 5px;
			border: 1px solid rgb(220, 220, 220);
			&:focus {
				border: 2px solid rgba(0, 206, 158, 1);
			}
		}
		textarea {
			width: 100%;
			max-height: 100px;
			min-height: 100px;
			padding: 7px;
			outline: none;
			border-radius: 5px;
			border: 1px solid rgb(220, 220, 220);
			&:focus {
				border: 2px solid rgba(0, 206, 158, 1);
			}
		}
		label {
			margin-top: 1.2em;
			padding-bottom: 0.5em;
		}
		input[type='submit'] {
			margin-top: 2em;
			margin-bottom: 4em;
			background: orange;
			color: white;
			border: none;
			font-weight: 600;
			cursor: pointer;
		}
		fieldset {
			display: block;
		}
	}
`;
