const Todo = ({ todo, deleteTodo, toggleComplete }) => {

  return (
    <div className='text-center' onDoubleClick={() => toggleComplete(todo.id)}>
      <div className={`container col-6 ${todo.completed ? 'completed' : 'not-completed'}`}>
        <h3 className=" m-1 p-1">{todo.title}<button onClick={() => deleteTodo(todo.id)} className='m-2  btn btn-danger'>X</button></h3>
        <h6 className='m-1 p-1'>{todo.day}</h6>
      </div>

    </div>
  )
}

export default Todo