import styled from 'styled-components';

function Email() {
	return (
		<MailContainer>
			<h2>Kontakt oss</h2>

			<form>
				<input
					type='text'
					name='user_name'
					placeholder='Ditt navn...'
					required
				/>

				<input
					type='email'
					name='user_email'
					placeholder='Din epost...'
					required
				/>

				<input type='text' placeholder='Emne...' name='subject' required />

				<textarea name='message' cols='30' rows='10'></textarea>

				<button type='submit'>Send melding</button>
			</form>
		</MailContainer>
	);
}

export default Email;

const MailContainer = styled.div``;

const FormDiv = styled.div``;

const Btn = styled.button``;
