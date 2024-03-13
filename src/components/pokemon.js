import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export const Pokemon = () => {
    const [dogsurl,setDogs] = useState('');//everytime i use setdogs, it turns into get dogs

    useEffect(() => {
        getDogs()

    },[dogsurl])

    async function getDogs() {
        const response = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await response.json();
        console.log(response,data);

        if(response.ok){

            //let breeds = [];
            //const keys = Object.keys(data)
            //keys.forEach(dogbreed =>{
                //breeds.append
            //}
                
                //)



            console.log(data.Object)
            setDogs(data.message)
        }
    }
    return (
        <div>
            {dogsurl ? <img src={dogsurl}/> : <p>Loading...</p>}
        </div>
        
    )
}