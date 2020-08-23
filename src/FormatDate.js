import React from 'react';

export default class FormattedDate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span> {this.props.date.toLocaleTimeString()}</span>
    )
  }
}