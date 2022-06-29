// import todos from "../reducers/todos.json"

// implement a FSM
const todosReducer = (state = [], action) => {
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
        case 'set-todos':
            return action.todos
        default:
            return state;
    }
}

export default todosReducer;