import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import './App.css';

function App() {

	useEffect(() => {
		const socket = io()

	}, [])
	const [messages, setMessages] = useState([
		{
			message: 'Hello Victor',
			id: 'kjflkjdslfja',
			user: {
				id: 'jflkjdsa',
				name: 'Dymuch'
			}
		},
		{
			message: 'Hello Dimuch',
			id: 'kjflkkjfdsljja',
			user: {
				id: 'jflfjdsljf',
				name: 'Victor'
			}
		},
	]);
	return (
		<div className="App">
			<div style={{
				border: '1px solid black', padding: '10px', height: '300px', width: '300px', margin: '0 auto', overflowY: 'scroll'
			}}>
				{
					messages.map(m => {
						return <div>
							<b>{m.user.name}:</b> <b>{m.message}</b>
							<hr />
						</div>
					})
				}
			</div>
			<textarea name="" id=""></textarea>
			<button>Send</button>
		</div >
	);
}

export default App;
