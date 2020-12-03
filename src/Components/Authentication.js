import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function Authentication(props) {
	let [user, setUser] = useState({ username: '', password: '' });

	async function signUp(user) {
		const username = user.username;
		const password = user.password;
		try {
			const { user } = await Auth.signUp({
				username,
				password,
			});
			console.log(user);
		} catch (error) {
			console.log('error signing up:', error);
		}
	}

	async function signIn(user) {
        const username = user.username;
		const password = user.password;
		try {
			const user = await Auth.signIn(username, password);
		} catch (error) {
			console.log('error signing in', error);
		}
	}

	async function signOut() {
		try {
			await Auth.signOut();
		} catch (error) {
			console.log('error signing out: ', error);
		}
	}

	return <div>
        
            </div>;
}

export default withAuthenticator(Authentication);
