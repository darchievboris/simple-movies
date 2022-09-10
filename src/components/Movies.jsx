import React, {useEffect} from 'react';
import classes from './Movies.module.css';
import Movie from "./Movie";

const Movies = ({movies}) => {

    return (<div className="movies">
            {movies.map(movie => <Movie key={movie.imdbID} {...movie}></Movie>)}
        </div>

    )
};

export default Movies;