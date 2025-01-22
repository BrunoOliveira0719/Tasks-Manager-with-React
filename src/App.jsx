import { useEffect, useState } from "react";
import CreateTasks from "./components/CreateTasks";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks]);

  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10", {method: "GET"});
  //     const data = await response.json();

  //     setTasks(data);
  //   }

  //   fetchTasks(); //If you want call API to get tasks
  // }, []);

  function onTaskCheck(tasksId) {
    const newTasks = tasks.map(task => {
      if (task.id === tasksId) {
        return {...task, isCompleted: !task.isCompleted}
      }

      return task;
    })
    setTasks(newTasks);
  };

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  }
  
  function onCreateTaskSubmit(title, description) {
    const newTasks = {
      id: v4(), title, description, isCompleted: false,
    };
    setTasks([...tasks, newTasks]);
  }
  
  return <div className="w-screen h-screen bg-slate-700 flex justify-center p-6">
    <div className="w-[35%] space-y-4">
      <h1 className="text-white font-bold text-center">
        Tasks Manager
      </h1>
      <CreateTasks onCreateTaskSubmit={onCreateTaskSubmit}/>
      <Tasks tasks={tasks} onTaskCheck={onTaskCheck} onDeleteTaskClick={onDeleteTaskClick}/>
    </div>
    </div>;

}

export default App;