import React, {useEffect, useState} from 'react';
import Movies from "../components/Movies";

function Main() {
    const [movies, setMovies] = useState([]);
    const API_URL = "http://www.omdbapi.com/?apikey=a92eb983&s=matrix"
    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => setMovies(data.Search))
            .catch(e=> console.log(e))
    }, [])

    return (
        <main className="container content">
            {
                movies.length ?
                    <Movies movies={movies} /> :
                    <h5>Loading...</h5>
            }
        </main>
    );
}

export default Main;