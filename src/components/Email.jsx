import styled from 'styled-components';

function Email() {
	return (
		<MailContainer>
			<form
				action='mailto:someone@example.com'
				method='post'
				enctype='text/plain'
			>
				<label>
					Adresse:
					<input type='text' name='adresse' />
				</label>

				<input type='text' name='mail' />
				<input type='text' name='comment' size='50' />

				<input type='submit' value='Send' />
				<input type='reset' value='Reset' />
			</form>
		</MailContainer>
	);
}

export default Email;

const MailContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 2em auto;
	width: 60%;
`;
