import React from 'react';
import '../App.css';
import { useState } from 'react';

export const Home = () => {
    const [clicked, setClicked] = useState(0);
    const [inputBox, setInputBox] = useState('');
    const [display, setDisplay] = useState('');

    function handleClick() {
        setClicked(clicked + 1)
    }

    function handleTyping(event) {
        setInputBox(event.target.value)
    }

    function displayParagraph() {
        setDisplay(inputBox)
    }
    return (
        <div>
            <h1 className='font'>MICHELLE YEOH</h1>
            <div style={{paddingRight: '500px', paddingLeft: '500px'}}>
                <p className='navy'>about me!</p>
                <p>Hello, my name is Michelle. I am a first-year computer science major. Welcome to my personal website!</p>
                <button onClick={handleClick}>click me for a surprise!</button>
                <p>This is the number of times clicked: {clicked}</p>
                <br></br>

                <p>{inputBox}</p>
                <input value={inputBox} onChange={handleTyping}/>
                <button onClick={displayParagraph}>submit form</button>
            </div>
            
        </div>
    )
}