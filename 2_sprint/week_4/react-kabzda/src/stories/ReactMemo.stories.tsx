import React from "react"
import { useState } from "react"

export default {
  title: 'React.memo demo'
}

export const NewMessageCounter = (props: { count: number }) => {
  return <div>{props.count}</div>
}

export const UsersSecret = (props: { users: Array<string> }) => {
  return (
    <div>{
      props.users.map((u, i) => <div key={i}>{u}</div>)
    }
    </div>
  )
}

const Users = React.memo(UsersSecret)

export const Example1 = (props: {}) => {
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem'])
  const addUser = () => {
    const newUsers = [...users, 'Sveta' + new Date().getTime()]
    setUsers(newUsers)
  }
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={addUser}>add user</button>
      <NewMessageCounter count={counter} />
      <Users users={users} />
    </div>
  )
}
