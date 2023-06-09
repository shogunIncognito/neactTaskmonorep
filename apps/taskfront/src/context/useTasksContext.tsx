import { createContext, useEffect, useState } from "react";
import { ApiTask, UpdateTask } from "../types";
import { deleteTaskReq, getTasks, taskRequest, updateTaskReq } from "../services/api";
import { Task } from '../types'

interface TaskContextValues {
  tasks: Array<ApiTask>
  handleNewTask: (task: Task) => void
  deleteTask: (id: string | number) => void
  updateTask: (id: string | number, task: UpdateTask) => void
}

interface Props {
  children: React.ReactNode
}

export const TasksContext = createContext<TaskContextValues>({
  tasks: [],
  handleNewTask: () => { },
  deleteTask: () => { },
  updateTask: () => { }
})

export const useTasks: React.FC<Props> = ({ children }) => {
  const [tasks, setTasks] = useState<Array<ApiTask>>([])

  const handleNewTask = (task: Task) => {
    taskRequest(task)
      .then(res => reFetchTasks())      
  }

  const deleteTask = (id: string | number) => {
    deleteTaskReq(id)
      .then(res => reFetchTasks())      
  }

  const updateTask = (id: string | number, task: UpdateTask) => {
    updateTaskReq(id, task)
      .then(res => reFetchTasks())      
  }

  const reFetchTasks = () => {
    getTasks()
      .then(res => setTasks(res))
  }

  useEffect(() => {
    reFetchTasks()
  }, [])

  return (
    <TasksContext.Provider value={{ tasks, handleNewTask, deleteTask, updateTask }}>
      {children}
    </TasksContext.Provider>
  )
}
