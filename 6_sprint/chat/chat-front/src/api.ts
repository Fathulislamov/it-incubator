import { io } from "socket.io-client";
import * as SocketIOClient from 'socket.io-client';


export const api = {
	socket: null as null | SocketIOClient.Socket,
	createConnection() {
		this.socket = io("http://localhost:3009");
	},
	subscribe(initMessagesHandler: (messages: any) => void,
		newMessageSentHandler: (message: any) => void) {

		this.socket?.on('init-messages-publiched', initMessagesHandler)

		this.socket?.on('new-message-sent', newMessageSentHandler)

	},
	destroyConnection() {
		this.socket?.disconnect();
		this.socket = null
	},
	sendName(name: string) {
		this.socket?.emit('client-name-sent', name)
	},

	sendMessage(message: string) {
		this.socket?.emit('client-message-sent', message)
	}
}
