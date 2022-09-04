import Button from "../UI/Button";
import {useState} from "react";
import styles from './PanelTodo.module.css'

const PanelTodo = ({addTask}) => {

    const [newTask, setNewTask] = useState('')
    const onSubmitHandler = (event) => {
      event.preventDefault()
        addTask(newTask)
        setNewTask('')
    }
  return(
      <div className={styles.taskPanel}>
          <form onSubmit={onSubmitHandler}>
              <input placeholder='Add new task' value={newTask} onChange={e => setNewTask(e.target.value)}/>
              <Button type='submit' title='Add task'>Add task</Button>
          </form>
      </div>
  )
}
export default PanelTodo