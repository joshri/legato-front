import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';

import {
	AmplifyAuthenticator,
	AmplifySignUp,
	AmplifySignIn,
} from '@aws-amplify/ui-react';

function Authentication(props) {

	return (
		<div>
			<AmplifyAuthenticator usernameAlias='email'>
				<AmplifySignUp
					slot='sign-up'
					usernameAlias='email'
					formFields={[
						{
							type: 'email',
							label: 'Email',
							placeholder: 'legato@legatoconnects.com',
							required: true,
						},
						{
							type: 'password',
							label: 'Password',
							placeholder: '8 minimum characters + symbol',
							required: true,
						},
					]}
				/>
				<AmplifySignIn slot='sign-in' usernameAlias='email' />
			</AmplifyAuthenticator>
		</div>
	);
}

export default Authentication;
