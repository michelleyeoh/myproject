import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

export const Portfolio = () => {
    return (
        <div style={{paddingTop: '10px',paddingBottom:'40px'}} className='flex'>
            <nav>
                <div className='leftBox' style={{paddingRight:'50px'}}>
                    <h1>Technical Projects</h1>
                    <Link target={"_blank"} to="https://github.com/michelleyeoh">
                        <img src="https://i.imgur.com/DslGjV3.png" alt="git_logo" style={{height:50, paddingRight:15}}/>
                    </Link>
                </div>
                <div className='rightBox'>
                    <h1>Graphic Design Archive</h1>
                    <Link target={"_blank"} to="https://www.instagram.com/gelsigns">
                        <img src="https://i.imgur.com/zeVbpAe.png" alt="ig_logo" style={{height:35, paddingRight:15, paddingTop:'10px'}}/>
                    </Link>
                </div>
            </nav>
        </div>
    )
}