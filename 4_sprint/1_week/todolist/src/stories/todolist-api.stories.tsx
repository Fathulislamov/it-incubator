import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { todoListAPI } from '../api/api'

export default {
  title: 'API',
}

export const GetTodolists = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    todoListAPI.getTodoLists()
      .then((res) => {
        setState(res.data)
      })
  }, [])
  return <div>{JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    const title = 'Redux'
    todoListAPI.createTodo(title)
      .then((res) => {
        setState(res.data)
      })
  }, [])

  return <div>{JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    const todoid = 'f6fbe356-7499-43a9-b80a-d8327a49cd9c'
    todoListAPI.deleteTodo(todoid)
      .then((res) => {
        setState(res.data)
      })
  }, [])

  return <div>{JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    const todoid = '583b44ac-4597-498e-a542-e0effd09a052'
    const title = 'MobX'
    todoListAPI.updateTodo(todoid, title)
      .then((res) => {
        setState(res.data)
      })
  }, [])

  return <div>{JSON.stringify(state)}</div>
}
