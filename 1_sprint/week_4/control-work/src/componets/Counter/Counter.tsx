import './CounterStyle.css'

export type CounterPropsType = {
  count: number
  maxCount: number
}
export const Counter = ({ count, maxCount }: CounterPropsType) => {
  return (
    <div className={ count === maxCount ? 'max' : 'counter'}>
      {count}
    </div>
  )
}
