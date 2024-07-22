import axios from "axios"

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.1',
  withCredentials: true,
  headers: {
    'API-KEY': 'd672b161-ff40-4f9e-8e06-c9f810e3a7fb'
  }
})
export const todoListAPI = {
  getTodoLists: () => {
    return instance.get<TodolistType[]>('/todo-lists')
  },
  createTodo: (title: string) => {
    return instance.post<ResponseType<{ item: TodolistType }>>('/todo-lists', { title })
  },
  deleteTodo: (id: string) => {
    return instance.delete<ResponseType>(`/todo-lists/${id}`)
  },
  updateTodo: (id: string, title: string) => {
    return instance.put<ResponseType>(`/todo-lists/${id}`, { title })
  }
}
type TodolistType = {
  id: string
  title: string,
  addedDate: string
  order: number
}
type ResponseType<T = {}> = {
  data: T
  fieldErrors: string[]
  messages: string[]
  resultCode: number
}
