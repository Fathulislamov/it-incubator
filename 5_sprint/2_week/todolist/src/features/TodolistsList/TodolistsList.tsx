import React, { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  addTodolistTC,
  changeTodolistTitleTC,
  fetchTodolistsTC,
  FilterValuesType,
  removeTodolistTC,
  todolistsActions,
} from "features/TodolistsList/todolists.reducer";
import { addTask, removeTaskTC, updateTask } from "features/TodolistsList/tasks.reducer";
import { Grid, Paper } from "@mui/material";
import { Todolist } from "./Todolist/Todolist";
import { Navigate } from "react-router-dom";
import { selectTasks } from "features/TodolistsList/tasks.selectors";
import { selectTodolists } from "features/TodolistsList/todolists.selectors";
import { useAppDispatch } from "common/hooks/useAppDispatch";
import { AddItemForm } from "common/components/AddItemForm/AddItemForm";
import { selectIsLoggedIn } from "features/auth/model/auth.selectors";
import { TaskStatuses } from "common/enums/enums";

type PropsType = {
  demo?: boolean;
};

export const TodolistsList: React.FC<PropsType> = ({ demo = false }) => {
  const todolists = useSelector(selectTodolists);
  const tasks = useSelector(selectTasks);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (demo || !isLoggedIn) {
      return;
    }
    const thunk = fetchTodolistsTC();
    dispatch(thunk);
  }, []);

  const removeTask = useCallback(function (id: string, todolistId: string) {
    const thunk = removeTaskTC(id, todolistId);
    dispatch(thunk);
  }, []);

  const addTaskCallBack = useCallback(function (title: string, todolistId: string) {
    dispatch(addTask({ title, todolistId }));
  }, []);

  const changeStatus = useCallback(function (taskId: string, status: TaskStatuses, todolistId: string) {
    dispatch(updateTask({ taskId, model: { status }, todolistId }));
  }, []);

  const changeTaskTitle = useCallback(function (taskId: string, title: string, todolistId: string) {
    dispatch(updateTask({ taskId, model: { title }, todolistId }));
  }, []);

  const changeFilter = useCallback(function (filter: FilterValuesType, id: string) {
    dispatch(todolistsActions.changeTodolistFilter({ id, filter }));
  }, []);

  const removeTodolist = useCallback(function (id: string) {
    const thunk = removeTodolistTC(id);
    dispatch(thunk);
  }, []);

  const changeTodolistTitle = useCallback(function (id: string, title: string) {
    const thunk = changeTodolistTitleTC(id, title);
    dispatch(thunk);
  }, []);

  const addTodolist = useCallback(
    (title: string) => {
      const thunk = addTodolistTC(title);
      dispatch(thunk);
    },
    [dispatch],
  );

  if (!isLoggedIn) {
    return <Navigate to={"/login"} />;
  }

  return (
    <>
      <Grid container style={{ padding: "20px" }}>
        <AddItemForm addItem={addTodolist} />
      </Grid>
      <Grid container spacing={3}>
        {todolists.map((tl) => {
          let allTodolistTasks = tasks[tl.id];

          return (
            <Grid item key={tl.id}>
              <Paper style={{ padding: "10px" }}>
                <Todolist
                  todolist={tl}
                  tasks={allTodolistTasks}
                  removeTask={removeTask}
                  changeFilter={changeFilter}
                  addTask={addTaskCallBack}
                  changeTaskStatus={changeStatus}
                  removeTodolist={removeTodolist}
                  changeTaskTitle={changeTaskTitle}
                  changeTodolistTitle={changeTodolistTitle}
                  demo={demo}
                />
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
