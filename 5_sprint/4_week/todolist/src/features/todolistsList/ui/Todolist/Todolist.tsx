import { Delete } from "@mui/icons-material"
import { Button, IconButton } from "@mui/material"
import { AddItemForm, EditableSpan } from "common/components"
import { TaskStatuses } from "common/enums"
import { useAppDispatch } from "common/hooks"
import React, { useEffect } from "react"
import { Task } from "./Task/Task"
import { TodolistDomainType, todolistsActions, todolistsThunks } from "features/todolistsList/model/todolistsSlice"
import { TaskType } from "features/todolistsList/api/tasksApi.types"
import { tasksThunks } from "features/todolistsList/model/tasksSlice"
import { FilterTasksButtons } from "./FilterTasksButtons/FilterTasksButtons"

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

  let tasksForTodolist = props.tasks

  if (props.todolist.filter === "active") {
    tasksForTodolist = props.tasks.filter((t) => t.status === TaskStatuses.New)
  }
  if (props.todolist.filter === "completed") {
    tasksForTodolist = props.tasks.filter((t) => t.status === TaskStatuses.Completed)
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
      <div>
        {tasksForTodolist.map((t) => (
          <Task key={t.id} task={t} todolistId={props.todolist.id} />
        ))}
      </div>

      <div style={{ paddingTop: "10px" }}>
        <FilterTasksButtons />
      </div>
    </div>
  )
})
