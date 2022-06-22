import React from "react";
import Hello from "./Hello";
import helloReducer from "./HelloReducer";
import counterReducer from "./counterReducer";
import bankAccountReducer from "./bankAccountReducer";
import todosReducer from "./todosReducer";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import Counter from "./Counter";
import BankAccount from "./BankAccount.js"
import Todos from "./Todos";

const mainReducer = combineReducers({
    hello: helloReducer,
    count: counterReducer,
    account: bankAccountReducer,
    todos: todosReducer
}
)
const store = createStore(mainReducer);

const ReduxExamples = () => {
    // provide store to application
    return (
        <Provider store={store}>
        <div>
            <h2>My APP</h2>
            <Todos/>
            <BankAccount/>
            <Counter/>
            <Hello/>
        </div>
        </Provider>
    )
    
}

export default ReduxExamples;