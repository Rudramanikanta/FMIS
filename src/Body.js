import React, { Component } from 'react'

export default class Body extends Component {
  state = {
    courseList: [],
    name: "rudra"
  }
   data=[]
  componentDidMount() {
 
    fetch('https://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        console.log(this.state)
       this.data=json.data
       this.setState({courseList:json.data})
       console.log(this.state)
       console.log(this.data)
      })
     
  }
  
  render() {
  
    return (
      <div>
        <table className='table table-hover-dark'>
          <thead>
            <tr>
              <th>
                id
              </th>
              <th>
                email
              </th>
              <th>
                first_name
              </th>
              <th>
                last_name
              </th>
            </tr>
          </thead>
          <tbody>
            {this.data.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{value.id}</td>
                  <td>{value.email}</td>
                  <td>{value.first_name}</td>
                  <td>{value.last_name}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        
      </div>
    )
  }
}
