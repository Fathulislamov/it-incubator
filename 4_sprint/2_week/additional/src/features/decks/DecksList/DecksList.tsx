import { useEffect } from 'react'
import s from './DecksList.module.css'
import { useSelector } from 'react-redux'
import { DeckItem } from './DeckItem/DeckItem'
import { AppRootState, useAppDispatch, useAppSelector } from '../../../app/store'
import { DeckType } from '../decks-api'
import { setDeckTC } from '../decks-thunks'

export const DecksList = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setDeckTC())
  }, [])
  const decks = useAppSelector(state => state.decksReducer.decks)
  return <ul className={s.list}>
   {decks.map(d => < DeckItem deck={d} key={d.id} />)}
  </ul>
}
