import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import HTMLFlipBook from "react-pageflip";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import week_one from './images/week_one.jpg';
import winter_break from './images/winter_break.jpg';
import winter_week from './images/winter_week.jpg';
import galentines from './images/galentines.jpg';
import pre_winter from './images/pre_winter.jpg';
// import useState from 'react';
// import {DataItem} from './dataItem'

const spanStyle = {
    padding: '10px',
    background: '#efefef',
    color: '#000000',
    opacity: '75%'
  }
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '450px',
    width: '1200px',
    backgroundImage: 'center'
    
  }
  const slideImages = [
    {
        src: 'https://i.imgur.com/DWn60CW.jpg',
      caption: 'hidden seat'
    },
    {
        src: 'https://i.imgur.com/5EsgrIi.jpg',
        caption: 'davis tower'
    },
    {
        src: 'https://i.imgur.com/dW0vfet.jpg',
        caption: 'golden gate'
    },
    {
        src: 'https://i.imgur.com/j4lbvPC.jpg',
        caption: 'friendship garden'
    },
    {
        src: 'https://i.imgur.com/VxAMpEd.jpg',
        caption: 'venice canals'
    },
    {
        src: 'https://i.imgur.com/QbC1ZI8.jpg',
        caption: 'bampfa'
    },
    {
        src: 'https://i.imgur.com/CuomGVX.jpg',
        caption: 'copenhagen'
    },
    {
        src: 'https://i.imgur.com/2stKkIu.jpg',
        caption: 'NY Public Library'
    },
    {
        src: 'https://i.imgur.com/vCahfxG.jpg',
        caption: 'new york'
    },
    {
        src: 'https://i.imgur.com/gJXkejb.jpg',
        caption: 'balboa'
    },
    {
        src: 'https://i.imgur.com/SF6aSUu.jpg',
        caption: 'la jolla'
    },
  ];

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
        <div style={{paddingBottom:'30px'}}>
            <h1>about me!</h1>
            <br></br>
                <p>Hello, my name is Michelle. I am a first-year computer science major interested in frontend and backend devlopment.</p>
                <p>In addition to CS, I enjoy photography and design.</p>
            {/* <br></br> */}
            {/* 
            <button onClick={handleClick}>change something</button>
            <DataItem menu={items} message={'hello'}/>
            */}
            <h3>handmade collages:</h3>
            <h6>(click to flip page)</h6>
            <div className='center'>
                <HTMLFlipBook width={400} height={600} classname='mobile'>
                    <div className="demoPage">
                        <img src={galentines} alt="galentines" width='400' />
                    </div>
                    <div className="demoPage">
                        <img src={pre_winter} alt="pre_winter" width='400'/>
                    </div>
                    <div className="demoPage">
                        <img src={week_one} alt="week_one" width='400'/>
                    </div>
                    <div className="demoPage">
                        <img src={winter_break} alt="winter_break" width='400'/>
                    </div>
                    <div className="demoPage">
                        <img src={winter_week} alt="winter_week" width='400'/>
                    </div>
                </HTMLFlipBook>
            </div>
            <br></br>
            {/* <br></br> */}
            <h3>captured moments:</h3>
            <div className="slide-container">
                <Slide>
                    {slideImages.map((slideImage, index)=> (
                        <div key={index}>
                            <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.src})`}} className='center-cropped'>
                            <span style={spanStyle} className='flexEnd'>{slideImage.caption}</span>
                            </div>
                        </div>
                    ))} 
                </Slide>
            </div>
            <br></br>
            <h3>connect with me:</h3>
            <div>
                <Link target={"_blank"} to="https://www.linkedin.com/in/myeoh/">
                    <img src="https://i.imgur.com/LczZ8nf.png" alt="linkedin_logo" style={{height:30}}/>
                </Link>
            </div>
        </div>
    )
}