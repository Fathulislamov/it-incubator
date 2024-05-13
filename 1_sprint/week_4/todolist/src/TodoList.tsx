import { ChangeEvent, useState, KeyboardEvent } from "react"
import { FilterValuesType } from "./App"

type TodoListPropsType = {
  title: string
  tasks: Array<TaskType>
  removeTask: (taskId: string) => void
  addTask: (newTaskTitle: string) => void
  changeTaskStatus: (taskId: string, newIsDone: boolean) => void
}

export type TaskType = {
  id: string
  title: string
  isDone: boolean
}

export const TodoList = ({ title, tasks, removeTask, addTask, changeTaskStatus }: TodoListPropsType) => {
  // 1.
  // const title = props.title
  // const tasks = props.tasks

  // 2. 
  // const { title, tasks } = props

  // local state
  const [filter, setFilter] = useState<FilterValuesType>('all')
  const [taskTitle, setTaskTitle] = useState('')
  const [taskInputError, setTaskInputError] = useState<string | null>(null)
  const ifTaskCanAdded = taskTitle
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

  const taskList: Array<JSX.Element> | JSX.Element = tasks.length
    ? tasksForTodoList.map(task => {
      const onCLickReamoveTaskHandler = () => removeTask(task.id)
      return (
        <li key={task.id}>
          <input type="checkbox"
            checked={task.isDone}
            onChange={(e: ChangeEvent<HTMLInputElement>) => changeTaskStatus(task.id, e.currentTarget.checked)}
          />
          <span className={task.isDone ? 'task-done' : 'task'}>{task.title}</span>
          <button onClick={onCLickReamoveTaskHandler}>x</button>
        </li>
      )
    })
    : <div>Your taskList is empty</div>

  const onClickHandlerCreator = (filter: FilterValuesType) => {
    return () => setFilter(filter)
  }
  const onCLickAddTaskHandler = () => {
    const trimmedTaskTitle = taskTitle.trim()
    if (trimmedTaskTitle) {
      addTask(trimmedTaskTitle)
      setTaskTitle('')
		} else {
			setTaskTitle('Title is required')
		}
  }
  const onChangeSetTaskTitle = (e: ChangeEvent<HTMLInputElement>) => setTaskTitle(e.currentTarget.value)
  const onkeyDownAddTaskHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && ifTaskCanAdded) {
      onCLickAddTaskHandler()
    }
  }
  return (
    tasks.length === 0 ? (
      <p>Тасок нет</p>
    ) : (
      <div className="todolist">
        <h3>{title}</h3>
        <div>
          <input value={taskTitle} onChange={onChangeSetTaskTitle} onKeyDown={onkeyDownAddTaskHandler} />
          <button disabled={!ifTaskCanAdded} onClick={onCLickAddTaskHandler}>+</button>
					{!!taskInputError && <div>{taskInputError}</div>}
        </div>
        <ul>
          {taskList}
        </ul>
        <div>
          <button onClick={onClickHandlerCreator('all')}
            className={filter === 'all' ? 'filter-btn-active' : ''}>
            All
          </button>
          <button onClick={onClickHandlerCreator('active')}
            className={filter === 'active' ? 'filter-btn-active' : ''}>
            Active
          </button>
          <button onClick={onClickHandlerCreator('completed')}
            className={filter === 'completed' ? 'filter-btn-active' : ''}>
            Completed
          </button>
        </div>
      </div>
    )
  )
}
