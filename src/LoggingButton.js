import React from 'react';

class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = (e) => {
    console.log('this is:', this, ' : ', e);
  }

  handleClick2(e) {
    console.log('this is:', this, ' : ', e);
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick.bind(this)}>
          Click me
      </button>

        <button onClick={($event) => this.handleClick2($event)}>
          Click me 2
      </button>
      </>
    );
  }
}

export default LoggingButton;