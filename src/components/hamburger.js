import React from "react";
import "../styles/header.css"
// import {MdOutlineMenu} from 'react-icons/md'
// import {MdClose} from 'react-icons/md';
import { useState } from "react";



export default function Hamburger(){
    const [click, setclick] = useState(false);
    const Hamburger = <img src="https://cdn4.iconfinder.com/data/icons/ui-admin-side-menu-set-32-vol-1/40/Menu_Burder-512.png" alt="burger" width="30px" onClick={() => setclick(!click)}/>
    // <MdOutlineMenu className="HamburgerMenu"
            // size="30px" color="grey" onClick={() => setclick(!click)}/>
    const Close = <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Transparent_X.png" alt="close" width="20px" onClick={() => setclick(!click)}/>
    // <MdClose className="HamburgerMenu"
    //         size="30px" color="grey" onClick={() => setclick(!click)} />
    return (
        <hamburger>
            <a href="/" className='link'>ੈ✩‧₊˚michelle's page</a>  
            <nav>
                { click ? Close : Hamburger}
                {click && <a href="/aboutMe" className="NavLinks" style={{color:'grey'}}>About Me</a> &&
                    <a href="/portfolio" className="NavLinks" style={{color:'grey'}}>Portfolio</a>}
            </nav>
        </hamburger>
    )
}