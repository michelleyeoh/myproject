import React from 'react';
import {Link} from 'react-router-dom';

export const AboutMe = () => {
    return (
        <div>
            <h1>about me!</h1>
            <br></br>
            <p>Hello, my name is Michelle. I am a first-year computer science major.</p>
            <br></br>
            <h3>my socials:</h3>
            
            <div>
                <Link to="https://instagram.com/mwyeoh">
                    <img src="https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-white-glyph-900x900.png" alt="ig_logo" style={{height:25, paddingRight:15}}/>
                </Link>
                
                <Link to="https://linkedin.com/myeoh">
                    <img src="https://www.freeiconspng.com/thumbs/linkedin-logo-png/displaying-19-gallery-images-for-linkedin-logo-png-25.png" alt="linkedin_logo" style={{height:25}}/>
                </Link>
            </div>
             

            
            
        </div>
    )
}