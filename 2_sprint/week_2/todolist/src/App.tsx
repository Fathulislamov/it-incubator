import './App.css';
import { Todolist } from "./Todolist";
import { v1 } from "uuid";
import { useState } from "react";
import { AddItemForm } from './AddItemForm';

export type TaskType = {
  id: string
  title: string
  isDone: boolean
}

export type FilterValuesType = 'all' | 'active' | 'completed'

export type TodolistType = {
  id: string
  title: string
  filter: FilterValuesType
}

function App() {
  let todolistID1 = v1()
  let todolistID2 = v1()

  let [todolists, setTodolists] = useState<TodolistType[]>([
    { id: todolistID1, title: 'What to learn', filter: 'all' },
    { id: todolistID2, title: 'What to buy', filter: 'all' },
  ])

  let [tasks, setTasks] = useState({
    [todolistID1]: [
      { id: v1(), title: 'HTML&CSS', isDone: true },
      { id: v1(), title: 'JS', isDone: true },
      { id: v1(), title: 'ReactJS', isDone: false },
    ],
    [todolistID2]: [
      { id: v1(), title: 'Rest API', isDone: true },
      { id: v1(), title: 'GraphQL', isDone: false },
    ],
  })

  // const [tasks, setTasks] = useState<TaskType[]>([
  //   { id: v1(), title: 'HTML&CSS', isDone: true },
  //   { id: v1(), title: 'JS', isDone: true },
  //   { id: v1(), title: 'ReactJS', isDone: false },
  // ])


  // const [filter, setFilter] = useState<FilterValuesType>('all')

  const removeTask = (todolistId: string, taskId: string) => {
    setTasks({ ...tasks, [todolistId]: tasks[todolistId].filter(el => el.id !== taskId) })
  }

  const addTask = (todolistId: string, title: string) => {
    const newTask = {
      id: v1(),
      title: title,
      isDone: false
    }
    setTasks({ ...tasks, [todolistId]: [newTask, ...tasks[todolistId]] })
    // const newTasks = [newTask, ...tasks]
    // setTasks(newTasks)
  }

  const changeFilter = (todolistId: string, filterValue: FilterValuesType) => {
    setTodolists(todolists.map(el => el.id === todolistId ? { ...el, filter: filterValue } : el))
    // setFilter(filter)
    // const currenTodolist = todolists.find(el => el.id === todolistId)
    // 	if(currenTodolist){
    // 		currenTodolist.filter = filterValue
    // 		setTodolists([...todolists])
    // 	}
  }

  const changeTaskStatus = (todolistId: string, taskId: string, taskStatus: boolean) => {
    setTasks({ ...tasks, [todolistId]: tasks[todolistId].map(el => el.id === taskId ? { ...el, isDone: taskStatus } : el) })

    // const newState = tasks.map(t => t.id == taskId ? { ...t, isDone: taskStatus } : t)
    // setTasks(newState)
  }

  const removeTodolist = (todolistId: string) => {
    setTodolists(todolists.filter(el => el.id !== todolistId))
    delete tasks[todolistId]
    setTasks({ ...tasks })
  }

  const arr = [
    { title: 'What to learn-0' },
    { title: 'What to learn-1' },
    { title: 'What to learn-2' },
    { title: 'What to learn-3' },
  ]

  const addTodolist = (title: string) => {
		const newTodolist: TodolistType	 = { id: v1(), title, filter: 'all' }

	 setTodolists([newTodolist, ...todolists])
	 setTasks({...tasks, [newTodolist.id]: [] })
    // setTasks({ ...tasks, [todolistId]: [newTask, ...tasks[todolistId]] })
    // // const newTasks = [newTask, ...tasks]
    // setTasks(newTasks)
  }
  return (
    <div className="App">
			<AddItemForm addItem={addTodolist}/>
      {todolists.map(el => {
        let tasksForTodolist = tasks[el.id]
        if (el.filter === 'active') {
          tasksForTodolist = tasks[el.id].filter(task => !task.isDone)
        }

        if (el.filter === 'completed') {
          tasksForTodolist = tasks[el.id].filter(task => task.isDone)
        }
        return (
          <Todolist
            key={el.id}
            todolistId={el.id}
            title={el.title}
            tasks={tasksForTodolist}
            removeTask={removeTask}
            changeFilter={changeFilter}
            addTask={addTask}
            changeTaskStatus={changeTaskStatus}
            filter={el.filter}
            removeTodolist={removeTodolist}
          />
        )
      })}
    </div>
  );
}

export default App;

