import React from 'react'

function FunctionalComponent(props){
            const name = "Rahul Chidu";
            let age = "23";
    return(
        <div>
            <h1>Functional Component example</h1>
            <h4>My name is : {name}</h4>
            <h4>& my age : {age}</h4>
            <p>Description : {props.description}</p>
            <p>Name : {props.name}</p>
            <p>Salary : {props.salary}</p>
        </div>
    )
};

export default FunctionalComponent;