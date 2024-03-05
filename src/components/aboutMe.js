import React from 'react';
import {Link} from 'react-router-dom';
// import useState from 'react';
// import {DataItem} from './dataItem'

export const AboutMe = () => {
    // useEffect(()=> {},[]);
    /*
    const [items, setItems] = [
        {"name": "burger", "price": 5.6},
        {"name": "taco", "price": 5.5},
        {"name": "burrito", "price": 5.2}
    ]
    function handleClick(event){
        let temp = items;
        temp[0].name = 'milkshake';
        setItems(temp);
    }
    */
    return (
        <div>
            <h1>about me!</h1>
            <br></br>
            <p>Hello, my name is Michelle. I am a first-year computer science major.</p>
            <br></br>
            {/* 
            <button onClick={handleClick}>change something</button>
            <DataItem menu={items} message={'hello'}/>
            
            */}
            <h4>things i enjoy:</h4>
            <p>coffee</p>
            <p>cs (of course)</p>
            <p>photography</p>
            <p>running</p>
            <p>bread</p>
            <p>exploring new places</p>
            <p>dark chocolate</p>
            <p>trying new things</p>
            <br></br>
            <h3>connect with me:</h3>
            <div>
                <Link to="https://instagram.com/mwyeoh">
                    <img src="https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-white-glyph-900x900.png" alt="ig_logo" style={{height:30, paddingRight:15}}/>
                </Link>
                
                <Link to="https://linkedin.com/myeoh">
                    <img src="https://www.freeiconspng.com/thumbs/linkedin-logo-png/displaying-19-gallery-images-for-linkedin-logo-png-25.png" alt="linkedin_logo" style={{height:30}}/>
                </Link>
            </div>
             

            
            
        </div>
    )
}