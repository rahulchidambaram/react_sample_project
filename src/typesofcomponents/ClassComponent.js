import React from 'react'
import PropTypes from 'prop-types';

class ClassComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state  = {
            name: "Sachin",
            age: 53,
            salary: 30500.65,
        }

        this.changeSalary = this.changeSalary.bind(this);
        this.changeAge = this.changeAge.bind(this);


    }

    changeSalary() {
        this.setState({
            salary: this.state.salary + 500
        })
        
    }

    changeAge() {
        this.setState({
            age: 75
        })
    }

    render() {
        return (
            <div>
                <h1>Example of a class Component</h1>
                <p>My name is : <b>{this.state.name}</b></p>
                <p>Salary : <b>{this.state.salary}</b></p>
                <p>Age : <b>{this.state.age}</b></p>
                
                <button onClick={this.changeSalary}>Incentive</button>
                <button onClick={this.changeAge}>Change Age</button>
                <br></br>
                <h1>Props Example</h1>
                <p>Description : {this.props.description}</p>
                <p>Channel : {this.props.channel}</p>
                <div>
                    <h3>Name : {this.props.userName}</h3>
                    <h3>Age : {this.props.age}</h3>
                    <h3>marks : {this.props.marks}</h3>
                    <h3>Cube of 2 is : {this.props.cube(2)}</h3>
                </div>
            </div>
        );
    }
}

ClassComponent.propTypes = {
    userName : PropTypes.string.isRequired,
    age : PropTypes.number,
    marks : PropTypes.array,
    cube : PropTypes.func
}

ClassComponent.defaultProps = {
    userName : "Ram",
    age : 24,
    marks : [90,89,97,87,89],
    cube : function cube(a) { return a*a*a }
}


export default ClassComponent;