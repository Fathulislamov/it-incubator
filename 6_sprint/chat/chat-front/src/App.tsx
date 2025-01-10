import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import './App.css';
import { chatReduser, createConnection, destroyConnection } from './chat-reduser';

const rootReducer = { chat: chatReduser }
type AppStateType = ReturnType<typeof rootReducer>
const store = createStore(combineReducers(rootReducer), applyMiddleware(thunk))

function App() {

	const messages = useSelector((state: AppStateType) => state.chat.messages)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(createConnection())
		return () => {

			dispatch(destroyConnection())
		}

	}, [])

	const [message, setMessage] = useState('hello');
	// const [messages, setMessages] = useState<any[]>([]);
	const [name, setName] = useState('');
	const [isAutoScrollActive, setIsAutoScrollActive] = useState(true);
	const [lastScrollTop, setLastScrollTop] = useState(0);

	useEffect(() => {
		messagesAnchorRef.current!.scrollIntoView({ behavior: 'smooth' })
	}, [messages])

	const messagesAnchorRef = useRef<HTMLDivElement>(null)

	return (
		<div className="App">
			<div style={{
				border: '1px solid black', padding: '10px', height: '300px', width: '300px', margin: '0 auto', overflowY: 'scroll'
			}}
			>
				{
					messages.map(m => {
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
					socket.emit('client-name-sent', name)
				}}>send name</button>
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
