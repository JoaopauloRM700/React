import {useState}  from 'react';

interface ButtonProps{
    color: string;
    children:string;
}

export function Button(props: ButtonProps){

    const counter = useState(1)

    return(
        <button type= "button" style= {{backgroundColor:props.color}}></button>
    );
}