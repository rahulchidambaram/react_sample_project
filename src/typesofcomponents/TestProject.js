import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TestProject extends Component {
    constructor(props) {
      super(props)
      this.state = {
         count: 0,
      }

      this.increaseCount = this.increaseCount.bind(this);
      this.decreaseCount = this.decreaseCount.bind(this);
      this.input = React.createRef();
      this.getDetails = this.getDetails.bind(this);

    }

    increaseCount() 
    {
        this.setState({
            count: this.state.count + 1
        })
    }
    
    decreaseCount() 
    {
        this.setState({
            count: this.state.count - 1
        })

    }    

    getDetails() 
    {
        if(null != this.refs.firstName.value && "" != this.refs.firstName.value) 
        {
            if(null != this.refs.address.value && "" != this.refs.address.value)
            {
                if(null != this.refs.phn.value && "" != this.refs.phn.value)
                {
                alert("First Name :"+this.refs.firstName.value+"\n Last Name :"+ 
                this.refs.lastName.value+"\n Address :"+this.refs.address.value+"\n Age :"+this.refs.age.value+"\n Phone number :"+this.refs.phn.value+"\n Hobbies :"+this.refs.hobby.value)
                }
                else 
                {
                    alert("Please fill your Phone Number!")
                }
            }
            
            else {
                alert("Please fill your address!")
            }
            
        }

        else {
            alert("First name is mandatory")
        }
        
    }

  render() {
    return (
      <div>
        <h1>TestProject</h1>
        <p>Count = {this.state.count}</p>
            <div>
            <button onClick={this.increaseCount}>Increase Count</button>
            <button onClick={this.decreaseCount}>Decrease Count</button>
            </div> <br></br>

            <form>
        <div>
            <label>First Name : </label>
            <input type="text" name="firstName" ref="firstName" />
        </div> <br></br>
        <div>
            <label>Last Name : </label>
            <input type="text" name="lastName" ref="lastName" />
        </div><br></br>
        <div>
            <label>Address : </label>
            <input type="text" name="address" ref="address" />
        </div><br></br>
        <div>
            <label>Age : </label>
            <input type="text" name="age" ref="age" />
        </div><br></br>

        <div>
            <label>Phone Number : </label>
            <input type="number" name="phn" ref="phn" />
        </div><br></br>

        <div>
            <label>Hobbies : </label>
            <input type="text" name="hobby" ref="hobby" />
        </div><br></br>

        <button onClick={this.getDetails}>Submit</button>
      </form>
      </div>
    )
  }
}


export default TestProject