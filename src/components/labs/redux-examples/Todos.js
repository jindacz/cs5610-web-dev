import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const Todos = () => {
    const todos = useSelector((state) => state.todos)
    const movies = useSelector((state) => state.movies)
    const dispatch = useDispatch();
    
    useEffect(() => { // hook for onload
        console.log('Todos component loaded');
        fetch('http://localhost:4000/todos') // return promise
        // by default fetch sets a get requset
            .then((response) => { 
                // promise has then() register for a callback, knowing when response callback from server, so JS continue without waiting
                return response.json()
                // capture
            })
            .then((todos) => {
                console.log(todos);
                dispatch({ //action
                    type: 'set-todos',
                    todos
                })
            })
    }, [])

    const createTodo = () => {
        const newTodo = {
            _id: (new Date()).getTime()+'', 
            title: 'New TODO', 
            done: false
        };
        console.log(JSON.stringify(newTodo))

        fetch('http://localhost:4000/todos', {
            body: JSON.stringify(newTodo),
            method: "POST",
            headers: {'Content-Type': 'application/json'}
            // its headers, not header!!!
        });

        dispatch({
            type: 'create-todo', 
            todo: newTodo
        });
    }
    

    return(
        <div>
            <h1>Todos {movies.length}</h1>
            <button onClick={createTodo}>
                Create todo
            </button>
            <ul>
                {
                    todos.map((todo, idx) => 
                        <li key={todo._id}>
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