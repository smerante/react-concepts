import React from 'react';

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }


  getGreeting = (props) => {
    if (props.loggedIn) {
      return <h1>Welcome {props.user}</h1>
    }
    else {
      return <h1>Please login {props.user}</h1>
    }
  }

  render() {
    return (
      <div>
        {this.getGreeting(this.props)}
      </div>
    )
}
}