import { io } from "socket.io-client";


socket.on('init-messages-publiched', (messages) => {
	setMessages(messages)
})

socket.on('new-message-sent', (message) => {
	console.log(messages)
	setMessages(messages => [...messages, message])
})

const api = {
	socket: null as null | SocketIOClient.Socket,
	createConnection() {

		this.socket = io("http://localhost:3009");
	}
}
