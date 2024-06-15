import { ChangeEvent } from "react"
import "./ValueItemsStyle.css"

export type ValueItemsPropsType = {
  id: string
  title: string
  value: number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  error: string
}

export const ValueItems = ({ id, title, value, onChange, error }: ValueItemsPropsType) => {
  return (
    <div className={'valueItems'}>
      <label htmlFor={id}>{title}</label>
      <input type="number" id={id} value={value} onChange={onChange} className={error ? "Error" : ""} />
    </div>
  )
}
