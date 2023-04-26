import { useState } from 'react'
import InputTodo from './components/InputTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InputTodo />
    </>
  )
}

export default App
