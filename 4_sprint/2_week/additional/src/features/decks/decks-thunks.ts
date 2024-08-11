import { Dispatch } from "redux"
import { desksAPI } from "./decks-api"
import { addDecksAC, setDecksAC } from "./decks-reducer"

export const setDeckTC = () => (dispatch: Dispatch) => {
  desksAPI.fetchDesks().then((res) => {
    dispatch(setDecksAC(res.data.items))
  })
}
export const createDeckTC = (name: string) => async (dispatch: Dispatch) => {
  return desksAPI.createDesks(name).then((res) => {
    dispatch(addDecksAC(res.data))
  })
}
