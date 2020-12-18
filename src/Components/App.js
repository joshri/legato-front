
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/Landing.scss';
import React, { useState, useEffect } from 'react';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import Mailchimp from 'react-mailchimp-form';
import ConnectMessage from './ConnectMessage';
Amplify.configure(awsconfig);

function App() {

	document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01);

	return (
		<div className='App'>
			<div className='connect-msg'>
				<ConnectMessage />
			</div>
			<Mailchimp
				action='https://legatoconnects.us2.list-manage.com/subscribe/post?u=29fc24c88a25afe7251ee87a8&amp;id=8b8af18ae4'
				fields={[
					{
						name: 'EMAIL',
						placeholder: 'email',
						type: 'email',
						required: true,
					},
					{
						name: 'FNAME',
						placeholder: 'first name',
						type: 'text',
						required: true,
					},
					{
						name: 'LNAME',
						placeholder: 'last name',
						type: 'text',
						required: true,
					},
				]}
				messages={{
					sending: 'Sending...',
					success: 'Thank you for subscribing!',
					error: 'An unexpected error has occurred.',
					empty: 'Please enter an email address.',
					duplicate: "You're already on our list!",
					button: 'count me in!',
				}}
				className='mailchimp'
				buttonClassName='mailchimp-button'
			/>
		</div>
	);
}

export default App;
