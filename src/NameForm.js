import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isGoing: true,
      numberOfGuests: 2,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert(JSON.stringify(this.state, null, 2));
    event.preventDefault();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [target.name]: value
    });
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your favorite flavor:
            <select name="value" value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <label>
            Name:
          <input name="value" type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <textarea value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>

        <form onSubmit={this.handleSubmit}>
          <label>
            Is going:
          <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Number of guests:
          <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange} />
            <input type="submit" value="Submit" />
          </label>
        </form>
      </>
    );
  }
}

export default NameForm;