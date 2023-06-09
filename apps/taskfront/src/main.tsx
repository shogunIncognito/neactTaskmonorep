import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { useTasks as TaskProvider } from './context/useTasksContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TaskProvider>
      <App />
    </TaskProvider>
  </React.StrictMode>
)
