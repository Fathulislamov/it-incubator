import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { AppDispatchType, AppStateType } from '.';
import './App.css';
import { createConnection, destroyConnection, sendMessage, setClientName } from './chat-reduser';

function App() {

	const messages = useSelector((state: AppStateType) => state.chat.messages)

	const dispatch = useDispatch<AppDispatchType>()
	useEffect(() => {
		dispatch(createConnection())
		return () => {

			dispatch(destroyConnection())
		}

	}, [])

	const [message, setMessage] = useState('hello');
	const [name, setName] = useState('');

	useEffect(() => {
		messagesAnchorRef.current!.scrollIntoView({ behavior: 'smooth' })
	}, [messages])

	const messagesAnchorRef = useRef<HTMLDivElement>(null)

	return (
		< div className="App" >
			<div style={{
				border: '1px solid black', padding: '10px', height: '300px', width: '300px', margin: '0 auto', overflowY: 'scroll'
			}}
			>
				{
					messages.map((m: any) => {
						return <div key={m.id}>
							<b>{m.user.name}:</b> <b>{m.message}</b>
							<hr />
						</div>
					})
				}

				<div ref={messagesAnchorRef}></div>
			</div>
			<div>			<input value={name} onChange={(e) => setName(e.target.value)} />
				<button onClick={() => {
					dispatch(setClientName(name))
				}}>send name</button>
			</div>
			<textarea
				name=""
				id=""
				value={message}
				onKeyPress={() => {

					dispatch(typeMessage())
				}}
				onChange={(e) => setMessage(e.target.value)} >
			</textarea>
			<button onClick={() => {
				dispatch(sendMessage(message))
				setMessage('')
			}}>Send</button>
		</div >
	);
}

export default App;
