import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

export const Portfolio = () => {
    return (
        <div style={{paddingTop: '10px',paddingBottom:'40px'}} className='flex'>
            <nav>
                <div className='leftBox' style={{paddingRight:'50px'}}>
                    <h1>Technical Projects</h1>
                    <Link to="https://github.com/michelleyeoh">
                        <img src="https://camo.githubusercontent.com/dfe7e80288901f8d5e8de7562d6f94491e2a7f8042316fd544fe3b6364b63783/68747470733a2f2f69636f6e2d6c6962726172792e636f6d2f696d616765732f6769746875622d69636f6e2d77686974652f6769746875622d69636f6e2d77686974652d362e6a7067" alt="git_logo" style={{height:40, paddingRight:15}}/>
                    </Link>
                </div>
                <div className='rightBox'>
                    <h1>Graphic Design Archive</h1>
                    <Link to="https://instagram.com/gelsigns">
                        <img src="https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-white-glyph-900x900.png" alt="ig_logo" style={{height:30, paddingRight:15}}/>
                    </Link>
                </div>
            </nav>
        </div>
    )
}