import styles from './Task.module.css'
import {RiDeleteBin2Line, RiTodoFill} from "react-icons/ri";
import {FaCheck} from "react-icons/fa";

const Task = ( {task} ) => {
  return(
      <div className={`${styles.task} ${task.isCompleted ? styles.completedTask : ''}`}>
          <RiTodoFill className={styles.taskIcon} />
          <div className={styles.taskText}>
              {task.title}
          </div>
         <RiDeleteBin2Line className={styles.deleteTask}/>
          <FaCheck className={styles.checkTask} />
      </div>
  )
}
export default Task