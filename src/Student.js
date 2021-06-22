/*import React from "react";
import Pt from "prop-types"
let Username=
{
 firstname:"Naseer"
};

const Student=(props)=> {
    return <h1>I am {props.name}{Username.firstname} </h1>;
    
}
Student.propsType =
{
    name: Pt.string.isRequired,
    Username:Pt.string
}
Student.defaultProps={
    name: "Naseer"
}*/
import React, { Component, Fragment } from 'react';
class Student extends Component {
    constructor(props) {

        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    state = {
        name: "Munna",
        class: "BSIT"
    }
    handleClick = (name, e) => {
        console.log(name);
        console.log(e);
        console.log("50"+10+20);
        //this.setState({name:"Munna",class:"BITF17A"});
    }
    handleClickArg = (e) => {
        this.handleClick(this.state.name, e);
        console.log("50"+10+20);
    }
    componentDidMount()
    {
        console.log("Component Mounted")
    }
    componentWillUnmount() {
        console.log("Component UnMounted")
    }
    render() {
        return (
            <Fragment>
                <h1 > Hello {this.props.children} I am {this.state.name} </h1>
                <p > <span> I am from {this.state.class} class</span> </p><br></br>
                <div className="col-9">
                    <input type="text" aria-placeholder="Place your name" className="form-control" />
                </div>
                <br></br>
                <div className="col-2">
                    <button className="btn btn-warning px-5 fw-bold" onClick={e => { this.handleClick(this.state.name, e) }}>Delete</button>
                </div>
            </Fragment>
        )
    }
}
export default Student;
