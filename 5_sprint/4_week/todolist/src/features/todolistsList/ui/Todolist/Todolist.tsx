import { AddItemForm } from "common/components"
import { useAppDispatch } from "common/hooks"
import React, { useEffect } from "react"
import { TodolistDomainType } from "features/todolistsList/model/todolistsSlice"
import { tasksThunks } from "features/todolistsList/model/tasksSlice"
import { FilterTasksButtons } from "./FilterTasksButtons/FilterTasksButtons"
import { Tasks } from "./Tasks/Tasks"
import { TodolistTitle } from "./TodolistTitle/TodolistTitle"

type Props = {
  todolist: TodolistDomainType
}

export const Todolist = ({ todolist }: Props) => {
  const { id, entityStatus } = todolist

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(tasksThunks.fetchTasks(id))
  }, [])

  const addTask = (title: string) => {
    return dispatch(tasksThunks.addTask({ title, todolistId: id }))
  }

  return (
    <>
      <AddItemForm addItem={addTask} disabled={entityStatus === "loading"} />
      <TodolistTitle todolist={todolist} />

      <Tasks todolist={todolist} />
      <div style={{ paddingTop: "10px" }}>
        <FilterTasksButtons todolist={todolist} />
      </div>
    </>
  )
}
