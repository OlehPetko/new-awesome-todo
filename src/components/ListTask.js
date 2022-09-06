import Task from "./Task";
import styles from './ListTask.module.css'

const ListTask = ( {task, deleteTask, toggleTask} ) => {
  return(
      <div className={styles.taskList}>
          {task.length === 0 && <h2>To do list is empty</h2>}
          {task.map(task => <Task key={task.id} task={task} deleteTask={deleteTask} toggleTask={toggleTask} />)}
      </div>
  )
}
export default ListTask