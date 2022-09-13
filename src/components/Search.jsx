import React, {useState} from 'react';

const Search = ({searchMovies}) => {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("");

    const onSubmitHandler = (event) => {
        event.preventDefault()
        searchMovies(search,filter)
        setSearch("")
    };

    const changeValue = (event) => {
        setFilter(event.target.value)
    }

    return (
        <div>
            <div className="row">
                <form className="input-field" onSubmit={onSubmitHandler}>
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

            <label>
                <input className="with-gap" name="type" type="radio" value="" checked={filter === ""}
                       onChange={changeValue}/>
                <span>All</span>
            </label>
            <label>
                <input className="with-gap" name="type" type="radio" value="movie" checked={filter === "movie"}
                       onChange={changeValue}/>
                <span>Movies</span>
            </label>
            <label>
                <input className="with-gap" name="type" type="radio" value="series" checked={filter === "series"}
                       onChange={changeValue}/>
                <span>Series</span>
            </label>
        </div>
    )
};

export default Search;