// const data = [
//     {
//       _id: "123",
//       DataTransferItemList: "Accelerate the world's transition to sustainable energy",
//       done: false
//     },
//     {
//       _id: "234",
//       do: "Reduce space transportation costs to become a spacefaring civilization",
//       done: false
//     },
//    ];

// implement a FSM
import todos from "../reducers/todos.json"

const todosReducer = (state = todos, action) => {
    let newState = state;
    switch (action.type) {
        case 'create-todo':
            newState = [
                ...state,
                action.todo
            ];
            return newState;
            break;

        case 'delete-todo':
            newState = state.filter((todo) => {
                return todo._id !== action.todo._id;
            })
            return newState;
            break;

        case 'update-todo':
            newState = state.map((oldTodo) => {
                const theTodo = oldTodo._id === action.todo._id ?
                    action.todo : oldTodo;
                return theTodo;
            })
            return newState;
            break
        case 'get-todos':
            return state;
            break;
        default:
            return state;
    }
}

export default todosReducer;