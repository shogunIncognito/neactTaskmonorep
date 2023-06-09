import { useTasks } from "../context/useTasks"
import { ApiTask } from "../types"
import { BiTask, BiTaskX } from 'react-icons/bi'
import { RiDeleteBin2Fill } from 'react-icons/ri'

interface Props {
  task: ApiTask
}

export default function TaskItem({ task }: Props) {
  const { deleteTask, updateTask } = useTasks()

  const handleDelete = () => {
    if (!window.confirm('Are you sure you want to delete this task?')) return
    deleteTask(task._id)
  }

  const handleUpdate = () => {
    updateTask(task._id, { done: !task.done })
  }

  return (
    <div className={`${task.done ? 'bg-green-950' : 'bg-gray-900'} p-2 my-2 flex justify-between hover:bg-gray-800 hover:cursor-pointer`} key={task._id}>
      <div>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
      </div>
      <div className="flex gap-3 items-center text-2xl">
        <button onClick={handleUpdate}>
          {task.done ? <BiTask className="text-green-600" /> : <BiTaskX className="text-red-600" />}
        </button>
        <button onClick={handleDelete}>
          <RiDeleteBin2Fill />
        </button>
      </div>
    </div>
  )
}