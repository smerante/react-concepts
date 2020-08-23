import React from 'react';

export class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      on: !this.state.on
    });
    this.props.onToggle(!this.state.on);
  }

  render() {
    return (
      <button onClick={this.toggle}>
        {this.state.on ? 'On' : 'Off'}
      </button>
    );
  }
};

export default Toggle;