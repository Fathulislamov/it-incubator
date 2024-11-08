import { TaskStatuses } from "common/enums"
import { TaskType } from "features/todolistsList/api/tasksApi.types"
import { TodolistDomainType } from "features/todolistsList/model/todolistsSlice"
import { Task } from "../Task/Task"
import React from "react"

type Props = {
  todolist: TodolistDomainType
  tasks: TaskType[]
}
export const Tasks = ({ tasks, todolist }: Props) => {
  const { id, filter } = todolist
  let tasksForTodolist = tasks

  if (filter === "active") {
    tasksForTodolist = tasks.filter((t) => t.status === TaskStatuses.New)
  }
  if (filter === "completed") {
    tasksForTodolist = tasks.filter((t) => t.status === TaskStatuses.Completed)
  }
  return (
    <>
      {tasksForTodolist.map((t) => (
        <Task key={t.id} task={t} todolistId={id} />
      ))}
    </>
  )
}
