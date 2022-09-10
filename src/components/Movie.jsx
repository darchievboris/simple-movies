import React, {useEffect, useState} from 'react';
import classes from './Movie.module.css';

const Movie = ({Title, Year, imdbID, Type, Poster,}) => {
    return (
        <div className="card movie">
            <div className="card-image waves-effect waves-block waves-light">
                {
                    Poster === "N/A"
                        ? <img className="activator" src="https://placehold.co/280x430?text=Hello+World"/>
                        : <img className="activator" src={Poster}/>
                }
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{Title}</span>
                <p>{Year}<span className="right">{Type}</span></p>
            </div>
        </div>
    )
};

export default Movie;