
import React, { memo } from "react"
import { useMemo, useState } from "react"

export default {
  title: 'useMemo'
}

export const DifficultCoutingExample = () => {
  const [a, setA] = useState<number>(5)
  const [b, setB] = useState<number>(5)

  let resultA = 1;
  let resultB = 1;

  resultA = useMemo(() => {
    let tempResultA = 1
    for (let i = 1; i <= a; i++) {
      let fake = 0
      while (fake < 100000000) {
        fake++
        const fakeValue = Math.random()
      }
      tempResultA *= i
    }

    return tempResultA
  }, [a])


  for (let i = 1; i <= b; i++) {
    resultB *= i
  }

  return <>
    <input value={a} onChange={e => setA(Number(e.target.value))} />
    <input value={b} onChange={e => setB(+e.target.value)} />
    <hr />
    <div>
      Result for a: {resultA}
    </div>
    <div>
      Result for b: {resultB}
    </div>
  </>
}

export const UsersSecret = (props: { users: Array<string> }) => {
  console.log('UsersSecret')
  return (
    <div>{
      props.users.map((u, i) => <div key={i}>{u}</div>)
    }
    </div>
  )
}
const Users = memo(UsersSecret)

export const HelpsToReactMemo = (props: {}) => {
  console.log('HelpsToReactMemo')
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem'])

  const newArray = useMemo(() => {
    const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1)
    return newArray
  }, [users])
	
  const addUser = () => {
    const newUsers = [...users, 'Sveta' + new Date().getTime()]
    setUsers(newUsers)
  }

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => addUser()}>add user</button>
      {counter}
      <Users users={newArray} />
    </div>
  )
}
