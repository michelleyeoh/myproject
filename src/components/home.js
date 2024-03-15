import React from 'react';
import '../App.css';
import Typewriter from '../Typewriter';
// import { useState, useEffect } from "react"



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
    // const names = [
    //     'welcome, ', 'ni hao, ', 'greetings, '
    // ]
    // const [index, setIndex] = useState(0)
    // useEffect(() => {
    // if (index === names.length - 1) return
    //     setTimeout(() => {
    //         setIndex(index + 1)
    //     }, 2000);
    // }, [index])

    return (
        <div>
            <h2 className='textLeft'><Typewriter text="welcome, " delay={100} />I am</h2>
            <h1 className='font'>MICHELLE YEOH</h1>
            <div>
                <h2>Welcome to my personal website!</h2>
                <br></br>

                {/* <div className='flex'>
                    <div className='leftBox' style={{backgroundColor: 'grey', padding:'100px'}}>
                        <button>About Me</button>
                    </div>
                    <div style={{paddingRight:'50px'}}></div>
                    <div className='rightBox' style={{backgroundColor: 'grey', padding:'100px'}}>
                        <button>Portfolio</button>
                    </div>

                </div> */}
                
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