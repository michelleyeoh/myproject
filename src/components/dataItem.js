import React, {useEffect} from 'react';
import {useState} from 'react';

export const DataItem = (props) => {
    
    console.log(props)
    const[menu,setMenu]=useState(props.menu);

    useEffect(() =>{
        setMenu(props.menu)
        console.log(menu);
    }, [props]);
    return(
        <div>
            {menu.map((item,key)=> {
                return (<>
                    <h1>{item.name}</h1>
                    <h1>{item.sprice}</h1>
                </>)
            })}
        </div>
    )

}