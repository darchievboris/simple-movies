import React, {useEffect, useState} from 'react';
import Movies from "../components/Movies";
import Preloader from "../components/UI/Preloader";
import Search from "../components/Search";

function Main() {
    const [movies, setMovies] = useState([]);
    const API_URL = "http://www.omdbapi.com/?apikey=a92eb983"
    useEffect(() => {
        requestToServer()
    }, [])

    const requestToServer = (search = "matrix", filter = "") => {
        const url = `${API_URL}&s=${search}&type=${filter}`
        fetch(url)
            .then(response => response.json())
            .then(data => setMovies(data.Search))
            .catch(e => console.log(e))
    };
    return (
        <main className="container content">
            <Search searchMovies={requestToServer}/>
            {
                movies.length
                    ? <Movies movies={movies}/>
                    : <Preloader/>
            }
        </main>
    );
}

export default Main;