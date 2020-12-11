import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import Mailchimp from 'react-mailchimp-form';
import ConnectMessage from './ConnectMessage';
Amplify.configure(awsconfig);

function App() {
	
	let [message, setMessage] = useState(0);

	return (
		<div className='App'>
			<ConnectMessage message={message} setMessage={setMessage}/>
			<Mailchimp
				action='https://legatoconnects.us2.list-manage.com/subscribe/post?u=29fc24c88a25afe7251ee87a8&amp;id=8b8af18ae4'
				fields={[
					{
						name: 'EMAIL',
						placeholder: 'Email',
						type: 'email',
						required: true,
					},
					{
						name: 'FNAME',
						placeholder: 'First Name',
						type: 'text',
						required: true,
					},
					{
						name: 'LNAME',
						placeholder: 'Last Name',
						type: 'text',
						required: true,
					},
				]}
				className='mailchimp'
			/>
		</div>
	);
}

export default App;
