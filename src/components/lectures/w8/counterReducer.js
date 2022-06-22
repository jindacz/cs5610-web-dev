const count = 345;

const counterReducer = (state = count, action) => {
    console.log('counterReducer');
    console.log(state, action);
    switch (action.type){
        case 'increment-counter': 
            return state + 1
            break
        case 'decrement-counter':
            return state - 1
            break;
        default:
            return state;
    }
}

export default counterReducer;