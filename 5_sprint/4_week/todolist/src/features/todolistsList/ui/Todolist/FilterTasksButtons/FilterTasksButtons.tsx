import { Button } from "@mui/material"
import { useAppDispatch } from "common/hooks"
import { FilterValuesType, TodolistDomainType, todolistsActions } from "features/todolistsList/model/todolistsSlice"
import React from "react"

type Props = {
  todolist: TodolistDomainType
}
export const FilterTasksButtons = ({ todolist }: Props) => {
  const { id, filter } = todolist
  const dispatch = useAppDispatch()

  const changeTodolistFilterHandler = (filter: FilterValuesType) => {
    dispatch(todolistsActions.changeTodolistFilter({ id, filter: "all" }))
  }
  const onAllClickHandler = () => {
    dispatch(todolistsActions.changeTodolistFilter({ id, filter: "all" }))
  }

  const onActiveClickHandler = () => {
    dispatch(todolistsActions.changeTodolistFilter({ id, filter: "active" }))
  }

  const onCompletedClickHandler = () => {
    dispatch(todolistsActions.changeTodolistFilter({ id, filter: "completed" }))
  }
  return (
    <>
      <Button variant={filter === "all" ? "outlined" : "text"} onClick={onAllClickHandler} color={"inherit"}>
        All
      </Button>
      <Button variant={filter === "active" ? "outlined" : "text"} onClick={onActiveClickHandler} color={"primary"}>
        Active
      </Button>
      <Button
        variant={filter === "completed" ? "outlined" : "text"}
        onClick={onCompletedClickHandler}
        color={"secondary"}
      >
        Completed
      </Button>
    </>
  )
}
