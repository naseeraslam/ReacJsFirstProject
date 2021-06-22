import React, {   Fragment, useState} from 'react'

function Practice()
{
    //const [state, setstate] = useState(initialState);
    const [name, setname] = useState("Muhammad Naseer Aslam");
    const [roll, setroll] = useState("BITF17A039");
    
    const handleClick =()=>
    {
        setname("Sohaib Salman");
        setroll("BITF17A040");
    };
    return <React.Fragment>
        <h1>
            Hi my name is {name} 
            
        </h1>
        <br></br><br></br><br></br>
        <h2>Roll Number is :{roll}</h2>
        <button type="button" onClick={handleClick}>Change</button>

    </React.Fragment>
}
export default Practice;