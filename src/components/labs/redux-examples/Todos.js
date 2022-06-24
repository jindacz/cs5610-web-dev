import React from "react";
import { useDispatch, useSelector } from "react-redux";


const Todos = () => {
    const todos = useSelector((todos) => todos)
    const dispatch = useDispatch();
    return(
        <div>
            <h1>Todos</h1>
            <button onClick={() => 
                dispatch({
                    type: 'create-todo', 
                    todo: {
                        _id: (new Date()).getTime()+'', 
                        title: 'New TODO', 
                        done: false}})}>
                Create todo
            </button>
            <ul>
                {
                    todos.map(todo => 
                        <li>
                            <input 
                                onChange={(event) => {
                                    dispatch({
                                        type: 'update-todo',
                                        todo: {
                                            ...todo,
                                            done: event.target.checked
                                        }
                                    })
                                }}
                                checked={todo.done}
                                type="checkbox"/>
                            {todo.title} {todo._id}
                            <button onClick={() => dispatch({
                                type: 'delete-todo',
                                todo: todo
                            })}>
                                Delete
                            </button>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default Todos