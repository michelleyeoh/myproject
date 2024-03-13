import React from 'react';
import '../App.css';
// import { useState } from 'react';

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
            {/* <h2>greetings, i'm </h2> */}
            <h1 className='font'>MICHELLE YEOH</h1>
            <div style={{paddingRight: '500px', paddingLeft: '500px'}}>
                <h2>Welcome to my personal website!</h2>
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