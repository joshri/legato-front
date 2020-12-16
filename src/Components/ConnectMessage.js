import React, { useState, useEffect } from 'react';
import { motion} from 'framer-motion';

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
		<div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
			<h1>Legato connects </h1>
			<div>
				<motion.h1
					animate={{ opacity: [0, 1, 1, 0], translateY: [0, 20, 20, 40] }}
					transition={{ repeat: Infinity, duration: 3 }}
					className='message'>
					{connections[message][0]}
				</motion.h1>{' '}
			</div>
			<h1>to </h1>
			<div>
				<motion.h1
					animate={{ opacity: [0, 1, 1, 0], translateY: [0, 20, 20, 40] }}
					transition={{ repeat: Infinity, duration: 3 }}
					className='message'>
					{connections[message][1]}
				</motion.h1>
			</div>
		</div>
	);
}

export default ConnectMessage;
