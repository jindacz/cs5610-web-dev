import React from "react";
import {useSelector, useDispatch} from "react-redux";

const Counter = () => {
    const count = useSelector((state) => state.count)
    const account = useSelector((state) => state.account)
    console.log(count)

    const dispatch = useDispatch()
    const plus = () => {
        // action: tell you what happened
        const action = {
            type: 'increment-counter'
        }
        dispatch(action) // call/invoke all the reducers
    }
    const minus = () => {
        const action = {
            type: 'decrement-counter'
        }
        dispatch(action)
    }
    return(
        <div>
            <h2>Count = {count}, {account.name}</h2>
             <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
        </div>
    )
}

export default Counter;