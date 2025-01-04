import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import './App.css';

const socket = io("http://localhost:3009");

function App() {

	useEffect(() => {

		socket.on('init-messages-publiched', (messages) => {
			setMessages(messages)
		})

		socket.on('new-message-sent', (message) => {
			console.log(messages)
			setMessages(messages => [...messages, message])
		})
	}, [])

	const [message, setMessage] = useState('hello');
	const [messages, setMessages] = useState<any[]>([]);

	return (
		<div className="App">
			<div style={{
				border: '1px solid black', padding: '10px', height: '300px', width: '300px', margin: '0 auto', overflowY: 'scroll'
			}}>
				{
					messages.map(m => {
						return <div key={m.id}>
							<b>{m.user.name}:</b> <b>{m.message}</b>
							<hr />
						</div>
					})
				}
			</div>
			<textarea name="" id="" value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
			<button onClick={() => {
				socket.emit('client-message-sent', message)
				setMessage('')
			}}>Send</button>
		</div >
	);
}

export default App;
