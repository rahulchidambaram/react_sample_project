import React, { useContext, useEffect, useState } from 'react'
import StdDetails from './StudentContext'
import './HooksExample.css' 

function HooksExample() {
    // const [statename, useStatename] = useState(deafultvalue);

    const [userName, setUserName] = useState('Chidu');
    const [language, setLanguage] = useState('JavaScript');
    const [count, setCount] = useState(0);
    const stdDetails = useContext(StdDetails)

    const updateName = () => {
        setUserName('Rahul Chidu')
    }

    useEffect(() => {
        alert("UseEffect works fine")
    })

    return (
    <div>
        <h1 className='hooks-heading'>Hooks Example</h1>
        <div>
            UserName : <span>{userName}</span>
        </div>
        
        <div>
            <button onClick={updateName}>Update Name</button>
        </div>

        <div>
            Language : <span>{language}</span>
        </div>

        <div>
            Count : <span>{count}</span>
        </div>

        

        <div>
            <h1>Student Details from Hooks</h1>
            <p>{stdDetails.name}</p>
            <p>{stdDetails.address}</p>
        </div>
    </div>
    )
}

export default HooksExample