import React, { useCallback, useMemo } from "react"
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
export const LikeUseCallbackMemo = (props: {}) => {
  console.log('LikeUseCallbackMemo')
  const [counter, setCounter] = useState(0)
  const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])

  const newArray = useMemo(() => {
    const newArray = books.filter(u => u.toLowerCase().indexOf('a') > -1)
    return newArray
  }, [books])

  const addBook = () => {
    const newBooks = [...books, 'Angular' + new Date().getTime()]
    setBooks(newBooks)
  }
	const memoizedAddBook = useCallback(()=>{
    const newBooks = [...books, 'Angular' + new Date().getTime()]
    setBooks(newBooks)
	},[books])
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <NewMessageCounter count={counter} />
      <Book books={newArray} addBook={memoizedAddBook} />
    </div>
  )
}

type BooksSecretPropsType = {
  books: Array<string>
  addBook: () => void
}

export const BooksSecret = (props: BooksSecretPropsType) => {
  console.log('BooksSecret')
  return (
    <div>
      <button onClick={props.addBook}>add book</button>
      {
        props.books.map((book, i) => <div key={i}>{book}</div>)
      }
    </div>
  )
}
const Book = React.memo(BooksSecret)
