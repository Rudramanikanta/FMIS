import React, { Component } from 'react'

export default class Layout extends Component {
  render() {
    console.log(this.props.match)
    return (
      <div>Layout</div>
    )
  }
}
