import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
// import cors from 'cors'

const app = express()
const server = http.createServer(app)

const socket = new Server(server, {
	cors: {
		origin: "http://localhost:3000",
		methods: ["GET", "POST"],
		allowedHeaders: ["my-custom-header"],
		// credentials: true
	}
})

const messages = [
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
	{
		message: 'Hello Dimuch yo yo',
		id: 'kjflkkjfdjlkjfsa',
		user: {
			id: 'jflfjdsljf',
			name: 'Victor'
		}
	},
]

const userState = new Map()
app.get('/', (req, res) => {
	res.send("Hello, it's WS server")
})

socket.on('connection', (socketChannel) => {

	socketChannel.on('disconnect', () => {
		userState.delete(socketChannel)
	})

	userState.set(socketChannel, { id: new Date().getTime().toString(), name: 'anon' })

	console.log('a user connected')
	// socket.on('disconnect', () => {
	// 	console.log('user disconnected')
	// })
	socketChannel.on('client-name-sent', (name: string) => {
		const user = userState.get(socketChannel)
		if (user) {
			user.name = name
		}

	})
	socketChannel.on('client-message-sent', (message: string) => {
		// console.log(socketChannel)
		console.log(message)
		const user = userState.get(socketChannel)
		const messageItem = { message, id: Date.now().toString(), user: { id: user.id, name: user.name } }
		messages.push(messageItem)
		socket.emit('new-message-sent', messageItem)
	})
	// setTimeout(() => {
	//
	// 	socketChannel.emit('init-messages-publiched', messages)
	// }, 4000)

	socketChannel.emit('init-messages-publiched', messages)
})


const PORT = process.env.PORT || 3009
server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
