import React, {useState} from 'react';
import classes from './Search.module.css';

const Search = ({searchMovies}) => {
    const [search, setSearch] = useState("");

    const onSubmitHandler = (event) => {
        event.preventDefault()
        searchMovies(search)
        setSearch("")
    };

    return (
        <div className="row">
            <form className="input-field" onSubmit={onSubmitHandler} >
                <input
                    placeholder="Search"
                    type="search"
                    className="validate"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <button className="btn search-btn indigo lighten-1" onClick={onSubmitHandler}>Search</button>
            </form>
        </div>
    )
};

export default Search;