import { useMemo, useState } from "react"

export default {
  title: 'useState memo'
}
function generateData() {
  console.log('generateData')
  return 1
}

export const Example1 = (props: {}) => {

  console.log('Example1')
  // const initValue = useMemo(generateData, [])

  const [counter, setCounter] = useState<number>(generateData)

  return (
    <div>
      <button onClick={() => setCounter(state => state + 1)}>+</button>
      {counter}
    </div>
  )
}
