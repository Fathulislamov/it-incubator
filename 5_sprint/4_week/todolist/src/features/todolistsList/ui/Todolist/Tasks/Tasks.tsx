import { TaskStatuses } from "common/enums"
import { TaskType } from "features/todolistsList/api/tasksApi.types"
import { TodolistDomainType } from "features/todolistsList/model/todolistsSlice"
import React from "react"
import { selectFilteredTasks } from "features/todolistsList/model/tasksSlice"
import { useSelector } from "react-redux"
import { AppRootStateType } from "app/store"
import { Task } from "./Task/Task"

type Props = {
  todolist: TodolistDomainType
}
export const Tasks = ({ todolist }: Props) => {
  const tasksForTodolist = useSelector<AppRootStateType, TaskType[]>((state) =>
    selectFilteredTasks(state, todolist.id, todolist.filter),
  )
  return (
    <>
      {tasksForTodolist.map((t) => (
        <Task key={t.id} task={t} todolistId={todolist.id} />
      ))}
    </>
  )
}
