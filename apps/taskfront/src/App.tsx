import { useEffect } from 'react'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

function App() {
  // useEffect(() => {
  //   fetch('http://localhost:3000/tasks/')
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  // }, [])

  return (
    <div className="bg-zinc-900 h-screen flex items-center justify-center text-white">
      <div className='bg-zinc-950 p-4 w-1/4'>
        <h2 className='text-3xl font-bold text-center block my-2'>TaskApp</h2>
        <TaskForm />
        <TaskList />
      </div>
    </div>
  )
}

export default App
