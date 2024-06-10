import { useState } from 'react'
import { Button } from '../Button/Button';
import './CounterStyle.css'

export type CounterPropsType = {
  startValue: number
  maxValue: number
  error: string
}


export const Counter = ({ startValue, maxValue, error }: CounterPropsType) => {

  const [count, setCount] = useState(startValue);

  const increment = () => {
    count < maxValue && setCount(count + 1)
  }

  const reset = () => {
    setCount(startValue)
  }
  return (
    <div className={'wrapCounter bordered'}>
      <div className={`${count === maxValue ? 'max' : 'counter'} bordered count`}>
        {error ? error : count}
      </div>
      <div className={'buttons bordered'}>
        <Button onClickHandler={increment} disabled={count === maxValue}>inc</Button>
        <Button onClickHandler={reset} disabled={count === startValue}>reset</Button>
      </div>
    </div >
  )

}
