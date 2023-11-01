import { useState } from 'react'
import Todos from './components/Todos'
import Heading from './components/Heading'
import AddTodo from './components/AddTodo'

const App = () => {

  const [todos, setTodo] = useState([
    {
      id: 1,
      title: 'Learn react props',
      completed: true,
      day: 'Feb at 1:00pm'
    },
    {
      id: 2,
      title: 'Learn react Hooks',
      completed: false,
      day: 'Feb at 1:00pm'
    },
    {
      id: 3,
      title: 'Learn react State',
      completed: false,
      day: 'Feb at 1:00pm'
    }
  ])

  const deleteTodo = (id) => {
    setTodo(todos.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodo(todos.map((todo) => todo.id == id ? { ...todo, completed: !todo.completed } : todo
    ))
  }


  const onAdd = (todo) => {
    const id = Math.floor(Math.ranydom() * 1000) + 1
    const newTodo = { id, ...todo }
    
    setTodo([...todos, newTodo])
  }

  return (
    <div className='App'>
      <div className='container'>
        <Heading text='Todo App' />
        <AddTodo onAdd={onAdd} />
        <div className='cover container'>
          <Heading text='Double click on todo to mark it as completed' />
          {todos.length >= 1 ? <Todos deleteTodo={deleteTodo} todos={todos} toggleComplete={toggleComplete} /> : <h1 className='text-center text-danger'>No todos to show</h1>}
        </div>
      </div>

    </div>
  )
}

export default App
