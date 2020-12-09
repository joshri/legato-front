import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import Mailchimp from 'react-mailchimp-form';
Amplify.configure(awsconfig);

function App() {
	return (
		<div className='App'>
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
						name: 'FIRST NAME',
						placeholder: 'First Name',
						type: 'text',
						required: true,
					},
					{
						name: 'LAST NAME',
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
