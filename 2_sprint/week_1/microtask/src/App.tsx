import { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';
import { v1 } from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";
export type todolistsType = {
  id: string
  title: string
  filter: FilterValuesType
}
function App() {

  // let [tasks, setTasks] = useState([
  //     {id: v1(), title: "HTML&CSS", isDone: true},
  //     {id: v1(), title: "JS", isDone: true},
  //     {id: v1(), title: "ReactJS", isDone: false},
  //     {id: v1(), title: "Rest API", isDone: false},
  //     {id: v1(), title: "GraphQL", isDone: false},
  // ]);
  // let [filter, setFilter] = useState<FilterValuesType>("all");

  let todolistID1 = v1();
  let todolistID2 = v1();

  let [todolists, setTodolists] = useState<Array<todolistsType>>([
    { id: todolistID1, title: 'What to learn', filter: 'all' },
    { id: todolistID2, title: 'What to buy', filter: 'all' },
  ])

  let [tasks, setTasks] = useState({
    [todolistID1]: [
      { id: v1(), title: "HTML&CSS", isDone: true },
      { id: v1(), title: "JS", isDone: true },
      { id: v1(), title: "ReactJS", isDone: false },
      { id: v1(), title: "Rest API", isDone: false },
      { id: v1(), title: "GraphQL", isDone: false },
    ],
    [todolistID2]: [
      { id: v1(), title: "HTML&CSS2", isDone: true },
      { id: v1(), title: "JS2", isDone: true },
      { id: v1(), title: "ReactJS2", isDone: false },
      { id: v1(), title: "Rest API2", isDone: false },
      { id: v1(), title: "GraphQL2", isDone: false },
    ]
  });



  function removeTask(todolistID: string, id: string) {
    setTasks({ ...tasks, [todolistID]: tasks[todolistID].filter(t => t.id != id) })
    // let filteredTasks = tasks.filter(t => t.id != id);
    // setTasks(filteredTasks);
  }

  function addTask(todolistID: string, title: string) {
    let NewTask = { id: v1(), title: title, isDone: false };
    setTasks({ ...tasks, [todolistID]: [NewTask, ...tasks[todolistID]] })
    // let task = { id: v1(), title: title, isDone: false };
    // let newTasks = [task, ...tasks];
    // setTasks(newTasks);
  }

  function changeStatus(todolistID: string, taskId: string, isDone: boolean) {
		setTasks({ ...tasks, [todolistID]: tasks[todolistID].map(t => t.id === taskId ? {...t, isDone } : t) })
    // let task = tasks.find(t => t.id === taskId);
    // if (task) {
    //   task.isDone = isDone;
    // }
    //
    // setTasks([...tasks]);
  }


  // let tasksForTodolist = tasks;


  function changeFilter(todolistID: string, value: FilterValuesType) {
    setTodolists(todolists.map(filtered => filtered.id === todolistID ? { ...filtered, filter: value } : filtered))
  }


  return (
    <div className="App">
      {todolists.map(MapTodolists => {
        let tasksForTodolist = tasks[MapTodolists.id]
        if (MapTodolists.filter === "active") {
          tasksForTodolist = tasks[MapTodolists.id].filter(t => t.isDone === false);
        }
        if (MapTodolists.filter === "completed") {
          tasksForTodolist = tasks[MapTodolists.id].filter(t => t.isDone === true);
        }
        return (
          <Todolist
            key={MapTodolists.id}
            title={MapTodolists.title}
            todolistID={MapTodolists.id}
            tasks={tasksForTodolist}
            removeTask={removeTask}
            changeFilter={changeFilter}
            addTask={addTask}
            changeTaskStatus={changeStatus}
            filter={MapTodolists.filter}
          />
        )
      })}
    </div>
  );
}

export default App;
