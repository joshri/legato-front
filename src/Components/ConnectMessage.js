import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function ConnectMessage(props) {
	const connections = {
		0: ['a', 'b'],
		1: ['b', 'c'],
	};

	let [message, setMessage] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			if (message < 1) {
				setMessage(message + 1);
			} else {
				setMessage(0);
			}
		}, 3000);
	});

	return (
		<div className='msg-line'>
			<h1>connecting </h1>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-evenly',
					width: '50vw',
				}}>
				<motion.h1
				style={{marginRight: '20vw'}}
					animate={{ opacity: [0, 1, 1, 1, 0, 0], translateY: [0, 20, 20, 40] }}
					transition={{ repeat: Infinity, duration: 3 }}
					className='message'>
					{connections[message][0]}
				</motion.h1>{' '}
				<h1>to </h1>
				<motion.h1
				style={{marginLeft:'20vw'}}
					animate={{ opacity: [0, 1, 1, 1, 0, 0], translateY: [0, 20, 20, 40] }}
					transition={{ repeat: Infinity, duration: 3 }}
					className='message'>
					{connections[message][1]}
				</motion.h1>
			</div>
		</div>
	);
}

export default ConnectMessage;
