import { useContext } from "react";
import { TasksContext } from "./useTasksContext";

export const useTasks = () => {
  return useContext(TasksContext)
}