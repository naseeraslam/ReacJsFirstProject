import React from "react";
import Student from "./Student";
import "./App.css";
const Composite=(props)=> 
{
    return (
    <div className="bg">
        <h1>I am Muhammad Naseer Aslam</h1>;
        <Student />{props.children}
        <Student name="Sohaib"/>
        <Student name="Basharat"/>
        </div>
    )
    
}
export default Composite;