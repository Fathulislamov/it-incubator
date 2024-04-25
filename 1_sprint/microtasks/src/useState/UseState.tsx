import { useState } from "react"

export const UseState = (props: {}) => {
  // let a = 1
  let [a, setA] = useState(1)
  const onClickHandler = () => {
    setA(++a)
    console.log(a)
  }
	const clear = () => { 
		setA(0) 
	}
  return (
    <div>
      <h1>{a}</h1>
      <button onClick={onClickHandler}>number</button>
      <button onClick={clear}>0</button>
    </div>
  )
}
