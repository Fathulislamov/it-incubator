import axios from 'axios'

export type MetaDataDesckType = {
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  updated: string
  cardsCount: number
}
export type DeckType = {
  isFavorite: boolean
  author: {
    id: string
    name: string
  }
} & MetaDataDesckType

export type CardType = {
  items: DeckType[]
  pagination: {
    currentPage: number
    itemsPerPage: number
    totalPages: number
    totalItems: number
  }
}
export type CreateCardType = {
  name: string
}
export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})
export const desksAPI = {
  fetchDesks() {
    return instance.get<CardType>('/v2/decks')
  },
  createDesks(name: string) {
    return instance.post<MetaDataDesckType>('/v1/decks', { name })
  }
}
