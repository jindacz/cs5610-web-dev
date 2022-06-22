import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Todos = () => {
    const [todo, setTodo] = useState({do: 'Default', done: false})
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();

    const createClickHandler = () => {
        dispatch({
            type: 'create-todo',
            todo          
        });
    }

    const deleteClickHandler = (todo) => {
        dispatch({
            type: 'delete-todo',
            todo // collpase syntax
        });
    }

    // console.log(todos);
    return(
        <>
            <h2>Todos</h2>
            <input onChange={(event) => setTodo({...todo, do: event.target.value})} value={todo.do}/>
            <button onClick={createClickHandler}>Create</button>
            <ul className="list-group">
                {
                todos.map(todo => 
                    <li className="list-group-item">
                        {todo.do}
                        <button onClick={() => deleteClickHandler(todo)}>
                            Delete
                        </button>
                    </li>
                )
            }
            </ul>
        </>
    )
}

export default Todos;