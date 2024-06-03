import { FilterValuesType, TaskType } from "./App";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { AddItemForm } from "./AddItemForm";
import { EditableSpan } from "./EditableSpan";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

type PropsType = {
  title: string
  tasks: TaskType[]
  removeTask: (todolistId: string, taskId: string) => void
  changeFilter: (todolistId: string, filter: FilterValuesType) => void
  addTask: (todolistId: string, title: string) => void
  changeTaskStatus: (todolistId: string, taskId: string, taskStatus: boolean) => void
  filter: FilterValuesType
  todolistId: string
  removeTodolist: (todolistId: string) => void
  updateTask: (todolistId: string, taskId: string, title: string) => void
  updateTodolistHandler: (title: string) => void
}

export const Todolist = (props: PropsType) => {

  // Перенести
  // let tasksForTodolist = tasks
  // if (props.filter === 'active') {
  //   tasksForTodolist = tasks.filter(task => !task.isDone)
  // }
  //
  // if (props.filter === 'completed') {
  //   tasksForTodolist = tasks.filter(task => task.isDone)
  // }

  const { todolistId,
    title,
    tasks,
    filter,
    removeTask,
    changeFilter,
    addTask,
    changeTaskStatus,
    removeTodolist,
    updateTask,
    updateTodolistHandler
  } = props

  const changeFilterTasksHandler = (filter: FilterValuesType) => {
    changeFilter(todolistId, filter)
  }

  const removeTodolistHadler = () => {
    removeTodolist(todolistId)
  }

  const addTaskHandler = (title: string) => {
    addTask(props.todolistId, title)
  }
  const removeTaskHandler = (taskid: string) => {
    removeTask(todolistId, taskid)
  }

  const updateTaskHandler = (taskid: string, newTitle: string) => {
    updateTask(todolistId, taskid, newTitle)
  }

  const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>, taskid: string) => {
    const newStatusValue = e.currentTarget.checked
    changeTaskStatus(todolistId, taskid, newStatusValue)
  }

  return (
    <div>
      <h3><EditableSpan oldTitle={title} updateItem={updateTodolistHandler} /></h3>
      {/*<button onClick={removeTodolistHadler}>x</button>*/}
      <IconButton aria-label="delete" onClick={removeTodolistHadler}><DeleteIcon /></IconButton>
      <AddItemForm addItem={addTaskHandler} />
      {
        tasks.length === 0
          ? <p>Тасок нет</p>
          : <List>
            {tasks.map((task) => {
              return <ListItem key={task.id} className={task.isDone ? 'is-done' : ''}>
                {/*  <input type="checkbox" checked={task.isDone} onChange={(e: ChangeEvent<HTMLInputElement>) => changeTaskStatusHandler(e, task.id)} /> */}
                <Checkbox checked={task.isDone} onChange={(e: ChangeEvent<HTMLInputElement>) => changeTaskStatusHandler(e, task.id)} />
                <EditableSpan oldTitle={task.title} updateItem={(newTitle: string) => updateTaskHandler(task.id, newTitle)} />
                {/*<Button onClick={() => removeTaskHandler(task.id)} title={'x'} />*/}
                <IconButton aria-label="delete" onClick={() => removeTaskHandler(task.id)}><DeleteIcon /></IconButton>
              </ListItem>
            })}
          </List>
      }
      <div>
        <Button variant={filter === 'all' ? 'outlined' : 'contained'} color={'error'} onClick={() => changeFilterTasksHandler('all')}>All</Button>
        <Button variant={filter === 'active' ? 'outlined' : 'contained'} color={'warning'} onClick={() => changeFilterTasksHandler('active')}>Active</Button>
        <Button variant={filter === 'completed' ? 'outlined' : 'contained'} color={'secondary'} onClick={() => changeFilterTasksHandler('completed')}>Completed</Button>
        {/* <Button className={filter === 'all' ? 'active-filter' : ''} title={'All'} onClick={() => changeFilterTasksHandler('all')} />
        <Button className={filter === 'active' ? 'active-filter' : ''} title={'Active'} onClick={() => changeFilterTasksHandler('active')} />
        <Button className={filter === 'completed' ? 'active-filter' : ''} title={'Completed'} onClick={() => changeFilterTasksHandler('completed')} />*/}
      </div>
    </div>
  )
}
