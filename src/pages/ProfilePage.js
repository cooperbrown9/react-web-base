import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class ProfilePage extends Component {

  constructor() {
    super();

    this.state = {
      myName: 'Ryan Murphy',
      friends: [
        { name: 'John', favColor: 'orange' },
        { name: 'Cool Dude', favColor: 'blue' },
        { name: 'Kush Dude', favColor: 'rgb(0, 200, 100)' }
      ]
    }
  }

  componentDidMount() {
    console.log('profile page');
  }

  changeName() {
    this.setState({ myName: 'Gay Homo' });
  }

  render() {
    return (
      <div>
        <label>profile page</label>
        <label>{this.state.myName}</label>

        <button onClick={() => this.changeName()}>Change Name</button>

        {(this.state.friends.map((friend) => (
          <div>
            <label style={{backgroundColor: friend.favColor}}>{friend.name} Favorite Color: {friend.favColor}</label>
          </div>
        )))}

        <NavLink to={"/"}>Go To Home</NavLink>
      </div>
    )
  }
}

export default ProfilePage;
