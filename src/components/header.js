import React from 'react';
import "../styles/header.css"

export const Header = () => {
    return (
        <header>
            
            <a href="/" className='link'>ੈ✩‧₊˚michelle's page</a>  
            <nav>
            {/* <h4>*ੈ✩‧₊˚michelle's page</h4> */}
            
                <div>
                    {/* <a href="/">Home</a> */}
                    <a href="/aboutMe">About Me</a>
                    <a href="/portfolio">Portfolio</a>
                    {/* <a href="/pokemon">Pokemon</a> */}
                </div>
                
            </nav>
        </header>
    )
}