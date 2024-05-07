import { useState } from 'react';
import { v1 } from 'uuid';
import './App.css';
import { TaskType, TodoList } from './TodoList';


export type FilterValuesType = 'all' | 'active' | 'completed'
function App() {

  //BLL
  const todoListTitle = "What to learn"

  // global state
  const [tasks, setTasks] = useState<Array<TaskType>>([
    { id: v1(), title: 'HTML & CSS', isDone: true },
    { id: v1(), title: 'JS & TS', isDone: true },
    { id: v1(), title: 'REACT', isDone: false },
  ])

  const removeTask = (taskId: string) => {

    // const newState = []
    // for (let i = 0; i < tasks.length; i++) {
    //   if (tasks[i].id !== taskId) {
    //     newState.push(tasks[i])
    //   }
    // }

    const newState = tasks.filter(t => t.id !== taskId)
    setTasks(newState)
  }

  const addTask = (newTaskTitle: string) => {
    const newTask: TaskType = {
      id: v1(),
      title: newTaskTitle,
      isDone: false
    }
    const newState = [newTask, ...tasks]
    setTasks(newState)
  }

  return (
    <div className="App">
      <TodoList
        title={todoListTitle}
        tasks={tasks}
        removeTask={removeTask}
				addTask={addTask}
      />
    </div>
  );
}

export default App;
