import { useState } from "react"
import { Task } from "../types"
import { useTasks } from "../context/useTasks"

export default function TaskForm() {
  const { handleNewTask } = useTasks()
  const [task, setTask] = useState<Task>({
    title: '',
    description: '',
    done: false
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleNewTask(task)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center my-4">
        <input value={task.title} onChange={handleChange} type="text" name="title" className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2" />
        <textarea value={task.description} onChange={handleChange} name="description" rows={3} className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"></textarea>

        <label htmlFor="" className="my-3 gap-x-2 inline-flex">
          <input onChange={(e) => setTask({ ...task, done: e.target.checked })} type="checkbox" className="h-6 w-5 text-indigo-600" />
          <span>Done</span>
        </label>

        <button className="bg-indigo-500 px-3 py-2 block w-full">Add</button>
      </form>
    </div>
  )
}