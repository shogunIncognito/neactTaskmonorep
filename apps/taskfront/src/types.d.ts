export interface ApiTask {
  _id: number
  title: string
  description?: string
  done?: boolean
  createdAt: string
  updatedAt: string
}

export type Task = Omit<ApiTask, '_id' | 'createdAt' | 'updatedAt'>
export type UpdateTask = Partial<Task>