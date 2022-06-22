const message = 'Hello World!'

// functiont that can calcualte what current state is
const helloReducer = (state, action) => {
    console.log('helloReducer')
    console.log(state, action);
    return message
};

export default helloReducer;