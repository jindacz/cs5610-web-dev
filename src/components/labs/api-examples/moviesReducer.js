const moviesReducer = (state = [], action) => { //action is payload
    switch (action.type){
        case 'fetch-movies':
            return action.movies;
        case 'deleted-movie':
            return state.filter(movie => movie._id !== action.movie._id)
        case 'created-movie':
            return [...state, action.movie]
        default:
            return state;
    }
}

export default moviesReducer