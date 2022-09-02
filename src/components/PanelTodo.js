import Button from "../UI/Button";
import {useState} from "react";

const PanelTodo = ({addTask}) => {

    const [newTask, setNewTask] = useState('')
    const onSubmitHandler = (event) => {
      event.preventDefault()
        addTask(newTask)
        setNewTask('')
    }
  return(
      <div>
          <form onSubmit={onSubmitHandler}>
              <input placeholder='Add new task' value={newTask} onChange={e => setNewTask(e.target.value)}/>
              <Button type='submit' title='Add task'>Add task</Button>
          </form>
      </div>
  )
}
export default PanelTodo