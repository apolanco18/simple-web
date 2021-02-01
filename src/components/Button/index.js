// import './index.scss';

// const Button = (props = {}) => {

//     const onButtonClick = () => {
//         console.log(props)
//         if(props.callback){ 
//             props.callback();
//         }
//         else{
//             alert("Warning You Have Download Virus")
//         }
//     }
//     const text = props.text || "Click me";


//     return (<button onClick={onButtonClick} className={}> {text}</button>)
//   }

//   export default Button;

import React, { Component, useState } from "react";


const Button = (props = {}) => {
    const [value,updateValueFunction] = useState(null);


    const onButtonClick = () => {
        if(props.callback){
            props.callBack()
        }
        else {
            alert("Hello World")
        }
    };

    const newVariable = () => {};

    return(
        <button onClick={onButtonClick}>{props.text || "CLICK ME"}</button> 
    );

}

export default Button;
