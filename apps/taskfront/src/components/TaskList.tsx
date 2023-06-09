import TaskItem from "./TaskItem"
import { useTasks } from "../context/useTasks"

export default function TaskList() {
  const { tasks } = useTasks()
  
  return (
    <div>
      {tasks.map(task => (
        <TaskItem key={task._id} task={task} />
      ))}
    </div>
  )
}