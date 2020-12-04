import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import Amplify, { Auth } from 'aws-amplify';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from '../aws-exports';
import Header from './Header';
Amplify.configure(awsconfig);

function App() {
	const [authState, setAuthState] = useState();
	const [user, setUser] = useState();

	return (
		<div className='App'>
			<Header AuthState={AuthState} onAuthUIStateChange={onAuthUIStateChange} />
		</div>
	);
}

export default App;
