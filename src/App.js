import './App.css';
import PanelTodo from "./components/PanelTodo";
import {useState} from "react";
import ListTask from "./components/ListTask";
import TaskActions from "./components/TaskActions";

function App() {
    const [task, setTask] = useState([])
    const addTask = (newTask) => {
        setTask([...task, {id: Math.random(), title: newTask, isCompleted: false}])
    }
    const completedTaskCount = task.filter(task => task.isCompleted).length




    const deleteTask = (id) => {
      setTask(task.filter(task => task.id !== id))
    }
    const toggleTask = (id) => {
      setTask(task.map(task => task.id === id ? {...task, isCompleted: !task.isCompleted} : task))
    }
    const resetAllTask = () => {
      setTask([])
    }
    const deleteCompletedTask = () => {
      setTask(task.filter(task => task.isCompleted === false))
    }

    return (
        <div className="App">
            <h1>To Do</h1>
            <PanelTodo addTask={addTask}/>
            {task.length !== 0 && <TaskActions deleteCompletedTask={deleteCompletedTask} resetAllTask={resetAllTask} completedTaskCount={completedTaskCount} />}
            <ListTask task={task} deleteTask={deleteTask}  toggleTask={toggleTask}/>
            {completedTaskCount > 1 && (<h2>{`You have completed ${completedTaskCount} todos`}</h2>) }
            {completedTaskCount === 1 && (<h2>{`You have completed ${completedTaskCount} todo`}</h2>) }
        </div>
    );
}

export default App;
