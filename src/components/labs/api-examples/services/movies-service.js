const movieApiUrl = 'http://localhost:4000/api/movies'

export const postMovie = (dispatch, movie) => {
    fetch(movieApiUrl, {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
            'content-type': 'application/json'
        }
    })
            // .then(response => response.json())
            .then(movies => {
                dispatch({ //notify the reducer
                    type: 'created-movie',
                    movie
                })
            })
}

export const fetchAllMovies = (dispatch) => {
    fetch(movieApiUrl)
            .then(response => response.json())
            .then(movies=> {
                dispatch({
                    type: 'fetch-movies',
                    movies
                })
            })
}

export const deleteMovieById = (dispatch, movie) => {
    fetch('http://localhost:4000/api/movies/' + movie._id, {
            method: 'DELETE'
        })
        // .then(response => response.json())
          .then(status => dispatch({
            type: 'deleted-movie',
            movie
          }))
          .catch(error => {})
}