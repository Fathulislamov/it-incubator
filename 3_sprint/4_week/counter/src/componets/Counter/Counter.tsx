import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ValuesType } from '../../App';
import { ChangeCountAC } from '../../state/reducer';
import { Button } from '../Button/Button';
import './CounterStyle.css'

export type CounterPropsType = {
  startValue: number
  maxValue: number
  error: string
  newData: boolean
}


export const Counter = () => {


  const count = useSelector<ValuesType, number>(state => state.count)
  const maxValue = useSelector<ValuesType, number>(state => state.maxValue)
  const startValue = useSelector<ValuesType, number>(state => state.startValue)
  const error = useSelector<ValuesType, string>(state => state.error)
  const isNewData = useSelector<ValuesType, boolean>(state => state.isNewData)

  const dispatch = useDispatch()

  const increment = () => {
    count < maxValue && dispatch(ChangeCountAC(count + 1))
  }

  const reset = () => {
    dispatch(ChangeCountAC(startValue))
  }
  return (
    <div className={'wrapCounter bordered'}>
      {
        (error || isNewData)
          ? <div className={`${error ? 'error' : 'default-text'} bordered count`}>
            {error ? error : 'enter value and press "set"'}
          </div>
          : <div className={`${count === maxValue ? 'max' : 'counter'} bordered count`}>
            {count}
          </div>
      }
      <div className={'buttons bordered'}>
        <Button onClickHandler={increment} disabled={count === maxValue || isNewData}>inc</Button>
        <Button onClickHandler={reset} disabled={count === startValue || isNewData}>reset</Button>
      </div>
    </div >
  )

}
