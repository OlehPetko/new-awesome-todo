import Task from "./Task";

const ListTask = ( {task, deleteTask} ) => {
  return(
      <div>
          {task.map(task => <Task key={task.id} task={task} deleteTask={deleteTask} />)}
      </div>
  )
}
export default ListTask