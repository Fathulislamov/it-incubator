import { ChangeEvent, useState } from "react"

export type FullInputPropType = { addMessage: (title: string) => void }
export const FullInput = (props: FullInputPropType) => {
  const [title, setTitle] = useState('')
  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value)
    console.log(title)
  }
  const onClickButtonHandler = () => {
    props.addMessage(title)
    setTitle('')
  }
  return (
    <div>
      <input onChange={onChangeInputHandler} value={title} />
      <button onClick={onClickButtonHandler}>+</button>
    </div>
  )
}
