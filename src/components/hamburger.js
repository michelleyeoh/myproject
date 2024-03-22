import React from "react";
import "../styles/header.css"
import {MdOutlineMenu} from 'react-icons/md'
import {MdClose} from 'react-icons/md';
import { useState } from "react";



export default function Hamburger(){
    const [click, setclick] = useState(false);
    const Hamburger = <MdOutlineMenu className="HamburgerMenu"
            size="30px" color="grey" onClick={() => setclick(!click)}/>
    const Close = <MdClose className="HamburgerMenu"
            size="30px" color="grey" onClick={() => setclick(!click)} />
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