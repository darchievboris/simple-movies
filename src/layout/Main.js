import React, {useEffect, useState} from 'react';
import Movies from "../components/Movies";
import Preloader from "../components/UI/Preloader";
import Search from "../components/Search";
const API_KEY = process.env.REACT_APP_API_KEY

function Main() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({is: false, message: ""});

    const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`
    useEffect(() => {
        requestToServer()
    }, [])

    const requestToServer = (search = "matrix", filter = "") => {
        setError({is: false, message: ""})
        if (filter) filter = `&type=${filter}`
        const url = `${API_URL}&s=${search}${filter}`
        fetch(url)
            .then(res => {
                if (res.status !== 200) {
                    let error = "Server not found!";
                    throw error
                }
                return res
            })
            .then(response => response.json())
            .then(data => {
                if (data.Error) {
                    let error = data.Error;
                    throw error
                }
                return data
            })
            .then(data => {
                setMovies(data.Search)
            })
            .catch(e => setError({is: true, message: e}))
            .finally(() => {
                setLoading(false)

            })
    };

    let content = ""

    if (error.is) {
        content = error.message
    } else if (loading) {
        content = <Preloader/>
    } else {
        content = <Movies movies={movies}/>
    }

    return (
        <main className="container content">
            <Search searchMovies={requestToServer}/>
            {
                content
            }
        </main>
    );
}

export default Main;