import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovieById, fetchAllMovies, postMovie } from "./services/movies-service";

const movieApiUrl = 'http://localhost:4000/api/movies'

const MovieAPIClient = () => {
    // local state variable, if state changes, force the component to re-render itself - endless loop fetch, refreshing
    // redux is application-level state
    // const [movies, setMovies] = useState([]) 

    const movies = useSelector((state) => state.movies);
    const dispatch = useDispatch();
    // equivlent to on-load, constructor 
    // pass in (function, array) for things you want to keep track of
    // empty array means never reload
    useEffect(() => fetchAllMovies(dispatch), []) //notify the reducer, moives come back from server

    const deleteMovie = (movie) => {
        deleteMovieById(dispatch, movie);
    }
    const createMovie = () => postMovie(dispatch, {
        title: 'New Movie'+ (new Date()).getTime(),
        rating: 3,
        _id: (new Date()).getTime()
    })

    return (
        <div>
            <h2>Movie API Client <button onClick={createMovie}>+</button></h2>
            {movies.length}
            <ul className="list-group">
                {
                    movies.map(movie =>
                        <li key={movie._id} onClick={() => deleteMovie(movie)} className="list-group-item">
                            <button className="btn btn-danger">
                                Delete
                            </button>
                            {movie.title}
                        </li>
                    )
                }
            </ul>
        </div>

    )
}

export default MovieAPIClient