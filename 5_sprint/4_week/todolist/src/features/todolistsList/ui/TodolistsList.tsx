import { Grid, Paper } from "@mui/material"
import { AddItemForm } from "common/components"
import { TaskStatuses } from "common/enums"
import { useAppDispatch } from "common/hooks"
import { useCallback, useEffect } from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { selectIsLoggedIn } from "features/auth/model/authSlice"
import { Todolist } from "./Todolist/Todolist"
import { selectTasks, tasksThunks } from "../model/tasksSlice"
import { FilterValuesType, selectTodolists, todolistsActions, todolistsThunks } from "../model/todolistsSlice"
import React from "react"

export const TodolistsList = () => {
  const todolists = useSelector(selectTodolists)
  const tasks = useSelector(selectTasks)
  const isLoggedIn = useSelector(selectIsLoggedIn)

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!isLoggedIn) {
      return
    }
    dispatch(todolistsThunks.fetchTodolists())
  }, [])

  const addTodolist = useCallback((title: string) => {
    dispatch(todolistsThunks.addTodolist(title))
  }, [])

  if (!isLoggedIn) {
    return <Navigate to={"/login"} />
  }

  return (
    <>
      <Grid container style={{ padding: "20px" }}>
        <AddItemForm addItem={addTodolist} />
      </Grid>
      <Grid container spacing={3}>
        {todolists.map((tl) => {
          let allTodolistTasks = tasks[tl.id]

          return (
            <Grid item key={tl.id}>
              <Paper style={{ padding: "10px" }}>
                <Todolist todolist={tl} tasks={allTodolistTasks} />
              </Paper>
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}
