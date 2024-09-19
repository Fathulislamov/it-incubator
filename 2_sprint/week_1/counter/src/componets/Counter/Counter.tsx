import { useState } from 'react'
import { Button } from '../Button/Button';
import './CounterStyle.css'

export const Counter = () => {

  const randomNumber = () => Math.floor(Math.random() * 10) + 1;

  const [count, setCount] = useState(0);
  const [maxCount, setMaxCount] = useState(randomNumber())

  const increment = () => {
    count < maxCount && setCount(count + 1)
  }

  const reset = () => {
    setCount(0)
    setMaxCount(randomNumber)
  }
  return (
    <div className={'wrapCounter bordered'}>
      <div className={`${count === maxCount ? 'max' : 'counter'} bordered`}>
        {count}
      </div>
      <div className={'buttons bordered'}>
        <Button onClickHandler={increment} disabled={count === maxCount}>Inc</Button>
        <Button onClickHandler={reset} disabled={count === 0}>Reset</Button>
      </div>
    </div >
  )

}
