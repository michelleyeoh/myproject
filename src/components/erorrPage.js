import React from 'react';
import "../styles/header.css"

export const ErrorPage = () => {
    return (
        <div>
            <h1 style={{color: 'red'}}>!ERROR!</h1>
            <nav>
                <a href="/">return home</a>
            </nav>
        </div>
    )
}