import { Dispatch } from "redux"
import { DeckType, MetaDataDesckType, desksAPI } from "./decks-api"

const initialState = {
  decks: [] as DeckType[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState


export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET_DECKS': {
      return {
        ...state,
        decks: action.decks
      }
    }
    case 'ADD_DECKS': {
      return {
        ...state,
        decks: [
          {
            isFavorite: false,
            author: {
              id: 'kjlkjfljdslkjfja',
              name: 'kjlkjlkj',
            },
            ...action.deck
          },
          ...state.decks,
        ]

      }
    }
    default:
      return state
  }
}

type DecksActions = SetDecksActionType | AddDecksActionType

type SetDecksActionType = ReturnType<typeof setDecksAC>
type AddDecksActionType = ReturnType<typeof addDecksAC>

export const setDecksAC = (decks: DeckType[]) => {
  return { type: 'SET_DECKS', decks } as const
}
export const addDecksAC = (deck: MetaDataDesckType) => {
  return { type: 'ADD_DECKS', deck } as const
}
