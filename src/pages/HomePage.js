import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class HomePage extends Component {

  constructor() {
    super();

    this.state = {
      title: 'Home Page'
    }
  }

  componentDidMount() {
    console.log('home page');
  }

  updateInput(event) {
    let inputText = event.target.value;

    this.setState({ title: inputText });
  }

  render() {
    return(
      <div>
        <label>its liiiiiit</label>
        <div />
        <label>{this.state.title}</label>


        <input value={this.state.inputValue} onChange={(event) => this.updateInput(event)} />

        <NavLink to={"/profile"}>Go To Profile</NavLink>


      </div>
    )
  }
}


export default HomePage;
