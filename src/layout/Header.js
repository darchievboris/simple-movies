import React from 'react';

const Header = () => {
    return (
        <nav className="indigo lighten-1">
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">Movies</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#">Repo</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
