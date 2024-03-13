import React from 'react';
import "../styles/header.css"

export const Header = () => {
    return (
        <header>
            <h4>*ੈ✩‧₊˚michelle's page</h4>
            
            <nav>
                <a href="/">Home</a>
                <a href="/aboutMe">About Me</a>
                <a href="/portfolio">Portfolio</a>
                {/* <a href="/pokemon">Pokemon</a> */}
            </nav>
        </header>
    )
}