import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="/">Home</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
        aria-expanded="false">Dropdown</a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="/layout">Layout</a></li>
        <li><a class="dropdown-item" href="/Nopage">Nopage</a></li>
        <li><a class="dropdown-item" href="/contact">contact</a></li>
        <li>
          <hr class="dropdown-divider"></hr>
        </li>
        <li><a class="dropdown-item" href=""></a></li>
      </ul>
    </li>
    {/* <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled">Disabled</a>
    </li> */}
  </ul>
      </div>
    )
  }
}
