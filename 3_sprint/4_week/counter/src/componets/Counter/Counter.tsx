import { useEffect, useState } from 'react'
import { Button } from '../Button/Button';
import './CounterStyle.css'

export type CounterPropsType = {
  startValue: number
  maxValue: number
  error: string
  newData: boolean
}


export const Counter = ({ startValue, maxValue, error, newData }: CounterPropsType) => {

  const [count, setCount] = useState(startValue);

  useEffect(() => { setCount(startValue) }, [startValue]);

  const increment = () => {
    count < maxValue && setCount(count + 1)
  }

  const reset = () => {
    setCount(startValue)
  }
  return (
    <div className={'wrapCounter bordered'}>
      {
        (error || newData)
          ? <div className={`${error ? 'error' : 'default-text'} bordered count`}>
            {error ? error : 'enter value and press "set"'}
          </div>
          : <div className={`${count === maxValue ? 'max' : 'counter'} bordered count`}>
            {count}
          </div>
      }
      <div className={'buttons bordered'}>
        <Button onClickHandler={increment} disabled={count === maxValue || newData}>inc</Button>
        <Button onClickHandler={reset} disabled={count === startValue || newData}>reset</Button>
      </div>
    </div >
  )

}
