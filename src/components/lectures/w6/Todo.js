import React from "react";
// import todos from './todos'
import TodoItem from "./TotoItem";
// import {Link} from "react-router-dom"
import Navigation from "./Navigation";

const Todo = (
    {
        todos = [ //default value
            {title: 'Todo 1'},
            {title: 'Todo 2'},
            {title: 'Todo 3'},
            {title: 'Todo 4'},
            {title: 'Todo 5'},
        ]
    }) => { //deconstruct syntax, several properties, extract the property todos

    return (
        // can only return one element
        // switch from js to html and to js use {}
        // use anonymous tag to not break the syntax
        <> 
            <Navigation/>
            <h1>Todo</h1>
            <ul>
                {
                    todos.map((todo) => {
                        return (<TodoItem todo={todo}/>
                    )
                })
            }
            <TodoItem todo={{title:'Buy the milk!!!', status:'Completed'}}/>
            <TodoItem todo={{title:'Pick up the kids', status:'Completed'}}/>
            <TodoItem todo={{title:'Walk the dogs', status:'Completed'}}/>
            <TodoItem todo={{title:'Make dinner', status:'Completed'}}/>
             
            </ul>
        </>
    );
}

export default Todo