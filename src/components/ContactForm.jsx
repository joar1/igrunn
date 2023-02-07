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

	const [value, setValue] = useState(false);
	const handleChange = () => {
		setValue(!value);
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

					<label>Telefon</label>
					<input type='number' name='user_phone' required />

					<label>Skriv din adresse</label>
					<input type='text' name='user_adresse' />

					<label>
						Vet du totalt årsforbruk i kWt for bolig forrige år, eller gjerne
						snitt fra 3 siste år? (Kan hentes på «Min side» hos nettleie-
						og/eller strømleverandør.) Dersom ikke, la være blankt.
					</label>
					<input type='number' name='user_kwt' />

					<label>Bruksareal på bolig (m2)?</label>
					<input type='number' name='user_m2' />

					<label>Byggeår bolig?</label>
					<input type='number' name='user_build' />

					<YesNoWrapper>
						<label>Er bolig etterisolert?</label>
						{/* <input type='text' name='user_isolation' /> */}
						<p>
							<input
								type='radio'
								name='user_isolation_yes'
								value={value}
								onChange={handleChange}
							/>
							Ja
						</p>
						<p>
							<input
								type='radio'
								name='user_isolation_no'
								value={value}
								onChange={handleChange}
							/>
							Nei
						</p>
					</YesNoWrapper>

					<label>Hvor mange husstandsmedlemmer?</label>
					<input type='number' name='user_members' />

					<YesNoWrapper>
						<label>Har dere badekar?</label>
						{/* <input type='text' name='user_bathtub' /> */}
						<p>
							<input
								type='radio'
								name='user_bathtub_yes'
								value={value}
								onChange={handleChange}
							/>
							Ja
						</p>
						<p>
							<input
								type='radio'
								name='user_bathtub_no'
								value={value}
								onChange={handleChange}
							/>
							Nei
						</p>
					</YesNoWrapper>

					<YesNoWrapper>
						<label>Har boligen et kjølebehov?</label>
						{/* <input type='text' name='user_cooling' /> */}
						<p>
							<input
								type='radio'
								name='user_cooling_yes'
								value={value}
								onChange={handleChange}
							/>
							Ja
						</p>
						<p>
							<input
								type='radio'
								name='user_cooling_no'
								value={value}
								onChange={handleChange}
							/>
							Nei
						</p>
					</YesNoWrapper>

					<label>
						Har dere vannbåren varme, eller ønsker dere tilbud på dette?
					</label>
					<input type='text' name='user_water' />

					<label>
						Har dere allerede bestilt varmepumpe, og hva er i tilfelle
						effektstørrelse (kW).?
					</label>
					<input type='text' name='user_heatPump' />

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
	background: linear-gradient(
		0deg,
		rgba(0, 0, 0, 1) 0%,
		rgba(35, 30, 26, 1) 100%
	);
	color: white;
	width: 100%;
	margin: 0 auto;
	@media (max-width: 768px) {
		max-width: 100%;
	}
`;
const YesNoWrapper = styled.div`
	display: flex;
	align-items: center;
	margin: 1em auto;
	width: 100%;
	input[type='radio'] {
		color: blue;
	}
`;

const StyledContactForm = styled.div`
	width: 50%;
	margin: 0 auto;
	padding: 2em 0 2em 0;
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
			padding: 10px;
			margin: 10px 0;
			outline: none;
			border: 2px solid #eee;
			border-radius: 10px;
			font-family: inherit;
			font-size: inherit;
			&:focus {
				border: 3px solid orange;
			}
		}
		textarea {
			margin-bottom: 10px;
			width: 100%;
			padding: 15px;
			border-radius: 15px;
			outline: none;
			box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.06);
			height: 150px;
			font-family: inherit;
			font-size: inherit;
			&:focus {
				border: 3px solid orange;
			}
		}
		label {
			margin-top: 1.2em;
			padding-bottom: 0.5em;
		}
		input[type='submit'] {
			margin: 10px 0;
			padding: 10px;
			border: none;
			background-color: orange;
			color: #fff;
			font-weight: 600;
			border-radius: 5px;
			width: 100%;
			cursor: pointer;
		}
		fieldset {
			display: block;
		}
	}
`;
