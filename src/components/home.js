import React from 'react';
import '../App.css';
import Typewriter from '../Typewriter';
// import { Text, StyleSheet, Pressable } from 'react-native';
import {Link} from 'react-router-dom';



export const Home = () => {
    // const [clicked, setClicked] = useState(0);
    // const [inputBox, setInputBox] = useState('');
    // const [display, setDisplay] = useState('');

    // function handleClick() {
    //     setClicked(clicked + 1)
    // }

    // function handleTyping(event) {
    //     setInputBox(event.target.value)
    // }

    // function displayParagraph() {
    //     setDisplay(inputBox)
    // }

    return (
        <div>
            <h2 className='textLeft'><Typewriter text="welcome, I am" delay={100} /></h2>
            <h1 className='font'>MICHELLE YEOH</h1>
            <div>
                <div className='flex2' style={{backgroundColor:'antiquewhite'}}>
                    <div className='leftBox' style={{padding:'50px'}}>
                        <img src="https://i.imgur.com/JJpB18Z.png" alt="stickfigure_me" height="150px"/>
                        <h4 style={{color:'black'}}>about me</h4>
                        <Link to="/aboutMe">
                            <button>VIEW</button>
                        </Link>
                    </div>
                    <div className='rightBox' style={{padding:'50px'}}>
                        <img src="https://i.imgur.com/kJI0fpu.png" alt="portfolio" height="150px"/>
                    
                        <h4 style={{color:'black'}}>portfolio</h4>
                        <Link to="/portfolio">
                            <button>VIEW</button>
                        </Link>
                    </div>

                </div>
                <br></br>
                {/* <div className='border'>
                    <h4>have fun with these js features:</h4>
                    <button onClick={handleClick}>click me!</button>
                    <p>Number of times clicked: {clicked}</p>
                    <br></br>

                    <input value={inputBox} onChange={handleTyping}/>
                    <button onClick={displayParagraph}>submit</button>
                    <p>{inputBox}</p>
                </div> */}
            </div>
        </div>
    )
}