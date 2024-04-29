import { useState } from "react"
import { FilterValuesType } from "./App"

type TodoListPropsType = {
  title: string
  tasks: Array<TaskType>
  removeTask: (taskId: number) => void
}

export type TaskType = {
  id: number
  title: string
  isDone: boolean
}

export const TodoList = ({ title, tasks, removeTask }: TodoListPropsType) => {
  // 1.
  // const title = props.title
  // const tasks = props.tasks

  // 2. 
  // const { title, tasks } = props

  // local state
  const [filter, setFilter] = useState<FilterValuesType>('all')
  // UI
  const getTasksForTodoList = (allTasks: Array<TaskType>, nextFilterValue: FilterValuesType) => {
    switch (nextFilterValue) {
      case 'active':
        return allTasks.filter(t => t.isDone === false)
      case 'completed':
        return allTasks.filter(t => t.isDone === true)
      default:
        return allTasks
    }
  }
  const tasksForTodoList = getTasksForTodoList(tasks, filter)

  const taskList: Array<JSX.Element> = tasksForTodoList.map(task => {
    const removeTaskHanler = () => removeTask(task.id)
    return (
      <li>
        <input type="checkbox" checked={task.isDone} />
        <span>{task.title}</span>
        <button onClick={removeTaskHanler}>x</button>
      </li>
    )
  })


  return (
    tasks.length === 0 ? (
      <p>Тасок нет</p>
    ) : (
      <div className="todolist">
        <h3>{title}</h3>
        <div>
          <input />
          <button>+</button>
        </div>
        <ul>
          {taskList}
        </ul>
        <div>
          <button onClick={() => setFilter('all')}>All</button>
          <button onClick={() => setFilter('active')}>Active</button>
          <button onClick={() => setFilter('completed')}>Completed</button>
        </div>
      </div>
    )
  )
}
