import { Task, UpdateTask } from '../types'

const API_URL = '/api/tasks';

export const taskRequest = async (task: Task) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(task),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await res.json();
}

export const getTasks = async () => {
  const res = await fetch(API_URL);
  return await res.json();
}

export const deleteTaskReq = async (id: string | number) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  })
  return res.json();
}

export const updateTaskReq = async (id: string | number, task: UpdateTask) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(task),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return res.json();
}