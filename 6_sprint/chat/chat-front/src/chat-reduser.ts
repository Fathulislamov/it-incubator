import { api } from "./api"

const initialState = {
	messages: []
}
export const chatReduser = (state: any = initialState, action: any) => {
	switch (action.type) {
		case 'messages-received': {
			return {
				...state,
				messages: action.messages
			}
		}
		case 'new-message-received': {
			return {
				...state,
				messages: [...state.messages, action.messages]
			}
		}
		default:
			return state
	}
}

const messagesReceived = (messages: any) => ({ type: 'messages-received', messages })

const newMessagesReceived = (message: any) => ({ type: 'new-message-received', message })

export const createConnection = () => (dispatch: any) => {
	api.createConnection()
	api.subscribe(
		(messages: any) => {
			dispatch(messagesReceived(messages))
		},
		(message: any) => {
			dispatch(newMessagesReceived(message))
		})
}

export const destroyConnection = () => (dispatch: any) => {
	api.destroyConnection()
}

export const setClientName = (name: string) => (dispatch: any) => {
	api.sendName(name)
}

export const sendMessage = (message: string) => (dispatch: any) => {
	api.sendMessage(message)
}
