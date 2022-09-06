import styles from './TaskActions.module.css'
import Button from "../UI/Button";
import {RiDeleteBin2Line, RiRefreshLine} from "react-icons/ri";

const TaskActions = ({ completedTaskCount, resetAllTask, deleteCompletedTask }) => {
  return(
      <div className={styles.taskActions}>
          <Button title='Reset tasks' onClick={resetAllTask}  ><RiRefreshLine/></Button>
          <Button disablled={!completedTaskCount} onClick={deleteCompletedTask} title='Clear reset tasks'><RiDeleteBin2Line/></Button>
      </div>
  )
}
export default TaskActions