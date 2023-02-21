import React, { Component } from 'react'

export default class Home extends Component {
  state={
    username:"",
    password:""
  }
  submitForm=(event)=>{
    event.preventDefault()
    if(this.state.username==="rudra" && this.state.password==="rudra1234"){
      this.props.navigate("/Data")
    }
  }
  changeHandler=(event)=>{
    event.preventDefault();
    
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  render() {
    return (
      <div>
        <form>
          <table className='table table-success table-hover'>
            <tbody>
              <tr>
                <td>
                  <label>UserName</label>
                </td>
                <td>
                  <input type="text"
                    placeholder='username'
                    name="username"
                    value={this.state.username}
                    onChange={this.changeHandler}
                  >
                  </input>
                </td>
              </tr>
              <tr>
                <td>
                  <label>password</label>
                </td>
                <td>
                  <input id="pass"
                  type="password"
                  placeholder='password'
                 name="password"
                  value={this.state.password}
                onChange={this.changeHandler}></input>

                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td><button className='btn btn-ouline btn-success'
                onClick={this.submitForm}
                
                >Submit</button></td>
              </tr>

            </tbody>
          </table>

        </form>
      </div>
    )
  }
}

