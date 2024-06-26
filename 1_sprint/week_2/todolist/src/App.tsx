import { useState } from 'react';
import './App.css';
import { TaskType, TodoList } from './TodoList';


export type FilterValuesType = 'all' | 'active' | 'completed'
function App() {

  //BLL
  const todoListTitle = "What to learn"

  // global state
  const [tasks, setTasks] = useState<Array<TaskType>>([
    { id: 1, title: 'HTML & CSS', isDone: true },
    { id: 2, title: 'JS & TS', isDone: true },
    { id: 3, title: 'REACT', isDone: false },
  ])

  const removeTask = (taskId: number) => {

    // const newState = []
    // for (let i = 0; i < tasks.length; i++) {
    //   if (tasks[i].id !== taskId) {
    //     newState.push(tasks[i])
    //   }
    // }

    const newState = tasks.filter(t => t.id !== taskId)
    setTasks(newState)
  }


  return (
    <div className="App">
      <TodoList
        title={todoListTitle}
        tasks={tasks}
        removeTask={removeTask}
      />
    </div>
  );
}

export default App;
