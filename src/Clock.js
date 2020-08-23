import React from 'react';
import FormattedDate from './FormatDate';

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: props.date,
      stateUpdates: 0
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
      stateUpdates: ++this.state.stateUpdates
    })
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is <FormattedDate date={this.state.date}/> {this.state.date.toDateString()}</h2>
        <h2>State updates: {this.state.stateUpdates}</h2>
      </div>
    );
  }
}

export default Clock;
