import { Delete } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { AddItemForm, EditableSpan } from "common/components"
import { useAppDispatch } from "common/hooks"
import React, { useEffect } from "react"
import { TodolistDomainType, todolistsThunks } from "features/todolistsList/model/todolistsSlice"
import { TaskType } from "features/todolistsList/api/tasksApi.types"
import { tasksThunks } from "features/todolistsList/model/tasksSlice"
import { FilterTasksButtons } from "./FilterTasksButtons/FilterTasksButtons"
import { Tasks } from "./Tasks/Tasks"

type PropsType = {
  todolist: TodolistDomainType
  tasks: TaskType[]
}

export const Todolist = React.memo(function (props: PropsType) {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(tasksThunks.fetchTasks(props.todolist.id))
  }, [])

  const addTask = (title: string) => {
    dispatch(tasksThunks.addTask({ title, todolistId: props.todolist.id }))
  }

  const removeTodolist = () => {
    dispatch(todolistsThunks.removeTodolist(props.todolist.id))
  }

  const changeTodolistTitle = (title: string) => {
    dispatch(todolistsThunks.changeTodolistTitle({ id: props.todolist.id, title }))
  }

  return (
    <div>
      <h3>
        <EditableSpan value={props.todolist.title} onChange={changeTodolistTitle} />
        <IconButton onClick={removeTodolist} disabled={props.todolist.entityStatus === "loading"}>
          <Delete />
        </IconButton>
      </h3>
      <AddItemForm addItem={addTask} disabled={props.todolist.entityStatus === "loading"} />

      <Tasks tasks={props.tasks} todolist={props.todolist} />
      <div style={{ paddingTop: "10px" }}>
        <FilterTasksButtons todolist={props.todolist} />
      </div>
    </div>
  )
})
