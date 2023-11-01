import React from 'react'
import { useState } from 'react'

const AddTodo = ({ onAdd }) => {

    const [title, setTodo] = useState('')
    const [day, setDay] = useState('')
    const [completed, setCompleted] = useState('')


    const onSubmit = (e) => {
        e.preventDefault();
        onAdd({ title, day, completed })
        setTodo('')
        setDay('')
        setCompleted('')
    }

    return (
        <>

            {/* Button trigger modal  */}
            <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add task
            </button>


            {/* Bootstrap Modal */}
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            
                            {/* Form here */}
                            <form onSubmit={onSubmit}>
                                <h2>Add Todo</h2>
                                <input required className='form-control' type="text" onChange={(e) => setTodo(e.target.value)} value={title} placeholder='Add todo' />
                                <input required className='form-control' type="text" onChange={(e) => setDay(e.target.value)} value={day} placeholder='Add day' />
                                <input required className='form-control' type="text" onChange={(e) => setCompleted(e.target.value)} value={completed} placeholder='Is this completed?' />
                                <input type="submit" className='btn btn-dark' />
                            </form>

                            {/* Form Ends here */}

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bootstrap Modal Ends*/}



        </>
    )
}

export default AddTodo