import React, { Component } from 'react'

class EmployeeList extends Component {
    render() {

        const employeeList = [
            { id: 101, name: "Rahul", address: "CMBT", salary: 35000.90 },
            { id: 102, name: "Srini", address: "Avadi", salary: 35000 },
            { id: 103, name: "Faizal", address: "Redhills", salary: 45000.45 },
            { id: 104, name: "Deepak", address: "Surappet", salary: 80000.5 }
        ]

        const showEmployeeDetailsList = employeeList.map(emp => {
            return (
                <div>
                    <p>Employee ID : {emp.id}</p>
                    <p>Employee Name : {emp.name}</p>
                    <p>Employee Address : {emp.address}</p>
                    <p>Employee Salary : {emp.salary}</p>
                </div>
            )
        })

        return (
            <div>
                <h1>Employee Details</h1>
                {showEmployeeDetailsList}
                <div>
                    <table>
                        <tr>
                            <th>Employee ID</th>
                            <th>Employee Name</th>
                            <th>Employee Address</th>
                            <th>Employee Salary</th>
                        </tr>
                        {employeeList.map((emp) => {
                            return <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.address}</td>
                                <td>{emp.salary}</td>
                            </tr>
                        })}
                    </table>
                </div>
            </div>
        )
    }
}

export default EmployeeList