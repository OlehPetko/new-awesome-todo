import Task from "./Task";

const ListTask = ( {task} ) => {
  return(
      <div>
          {task.map(task => <Task key={task.id} task={task} />)}
      </div>
  )
}
export default ListTask