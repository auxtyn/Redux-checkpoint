
import Todo from './Todo';

const Todos = ({ todos, deleteTodo, toggleComplete }) => {

  return (todos.map((todo) => <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />)
  )
}
export default Todos
