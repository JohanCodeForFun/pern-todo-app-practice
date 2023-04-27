import { useState } from 'react'
import InputTodo from './components/InputTodo'
import ListTodos from './components/ListTodos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InputTodo />
      <ListTodos />
    </>
  )
}

export default App
