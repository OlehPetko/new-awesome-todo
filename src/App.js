import './App.css';
import PanelTodo from "./components/PanelTodo";
import {useState} from "react";
import ListTask from "./components/ListTask";

function App() {
    const [task, setTask] = useState([])
    const addTask = (newTask) => {
        setTask([...task, {id: Math.random(), title: newTask, isCompleted: false}])
    }

    return (
        <div className="App">
            <h1>To Do</h1>
            <PanelTodo addTask={addTask}/>
            <ListTask task={task}/>

        </div>
    );
}

export default App;
