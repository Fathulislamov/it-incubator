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

app.get('/', (req, res) => {
	res.send("Hello, it's WS server")
})

socket.on('connection', (socketChannel) => {
	console.log('a user connected')
	// socket.on('disconnect', () => {
	// 	console.log('user disconnected')
	// })
	socketChannel.on('client-message-sent', (message: string) => {
		console.log(message)
		const messageItem = { message, id: Date.now().toString(), user: { id: 'jflfjdsljf', name: 'Victor' } }
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
