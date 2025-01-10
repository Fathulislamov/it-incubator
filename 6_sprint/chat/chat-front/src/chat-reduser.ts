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
	return {
		type: 'blabla'
	}
}
export const destroyConnection = () => (dispatch: any) => {
	return {
		type: 'blabla'
	}
}
