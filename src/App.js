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

    return (
        <div className="App">
            <h1>To Do</h1>
            <PanelTodo addTask={addTask}/>
            <TaskActions completedTaskCount={!!completedTaskCount} />
            <ListTask task={task}/>
        </div>
    );
}

export default App;
