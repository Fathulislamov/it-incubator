import { FilterValuesType, TaskType } from "./App";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { Button } from "./Button";
import { AddItemForm } from "./AddItemForm";

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

  const { todolistId, title, tasks, filter, removeTask, changeFilter, addTask, changeTaskStatus, removeTodolist } = props

  const changeFilterTasksHandler = (filter: FilterValuesType) => {
    changeFilter(todolistId, filter)
  }

  const removeTodolistHadler = () => {
    removeTodolist(todolistId)
  }

  const addTaskHandler = (title: string) => {
    addTask(title, props.todolistId)
  }

  return (
    <div>
      <h3>{title}</h3>
      <button onClick={removeTodolistHadler}>x</button>
      <AddItemForm addItem={addTaskHandler} />
      {
        tasks.length === 0
          ? <p>Тасок нет</p>
          : <ul>
            {tasks.map((task) => {

              const removeTaskHandler = () => {
                removeTask(todolistId, task.id)
              }

              const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
                const newStatusValue = e.currentTarget.checked
                changeTaskStatus(todolistId, task.id, newStatusValue)
              }

              return <li key={task.id} className={task.isDone ? 'is-done' : ''}>
                <input type="checkbox" checked={task.isDone} onChange={changeTaskStatusHandler} />
                <span>{task.title}</span>
                <Button onClick={removeTaskHandler} title={'x'} />
              </li>
            })}
          </ul>
      }
      <div>
        <Button className={filter === 'all' ? 'active-filter' : ''} title={'All'} onClick={() => changeFilterTasksHandler('all')} />
        <Button className={filter === 'active' ? 'active-filter' : ''} title={'Active'} onClick={() => changeFilterTasksHandler('active')} />
        <Button className={filter === 'completed' ? 'active-filter' : ''} title={'Completed'} onClick={() => changeFilterTasksHandler('completed')} />
      </div>
    </div>
  )
}
