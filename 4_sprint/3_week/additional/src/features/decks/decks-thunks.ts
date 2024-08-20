import { Dispatch } from 'redux'
import { decksAPI, UpdateDeckParams } from './decks-api.ts'
import { addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC } from './decks-reducer.ts'
import { setErrorAC, setStatusAC } from '../../app/app-reducer.ts'
import { AxiosError, isAxiosError } from 'axios'
import { setError } from '../../common/utils/handle-error.ts'

export const fetchDecksTC = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setStatusAC('loading'))
    const res = await decksAPI.fetchDecks()
    dispatch(setDecksAC(res.data.items))
    dispatch(setStatusAC('succeeded'))
  }
  catch {
    dispatch(setStatusAC('failed'))
  }
}

export const addDeckTC = (name: string) => async (dispatch: Dispatch) => {
  return decksAPI.addDeck(name).then((res) => {
    dispatch(addDeckAC(res.data))
  })
}

export const deleteDeckTC = (id: string) => async (dispatch: Dispatch) => {
  return decksAPI.deleteDeck(id).then((res) => {
    dispatch(deleteDeckAC(res.data.id))
  })
}

export const updateDeckTC = (params: UpdateDeckParams) => async (dispatch: Dispatch) => {
  try {
    const res = await decksAPI.updateDeck(params)
    dispatch(updateDeckAC(res.data))
  } catch (e: any) {
    let errorMessage: string

    if (isAxiosError<ServerError>(e)) {
      errorMessage = e.response ? e.response.data.errorMessages[0].message : (e.message + ', more details in the console')
    } else {
      errorMessage = (e as Error).message
    }
		setError(errorMessage)
  }
}
type ServerError = {
  errorMessages: Array<{ field: string; message: string }>
}
