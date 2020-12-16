import React from 'react'
import ReactDOM from 'react-dom'

class Form extends React.Component {
  constructor() {
    super();
    this.state = { username: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value;
    this.setState({ username });
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  render () {
    console.log('state ->', this.state);
    return (
      <div id='container'>
        <div id='navbar'>
          Form.js
        </div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='username'>Username:</label>
          <input type='text' name='username' value={this.state.username} onChange={this.handleChange} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(
  <Form />,
  document.getElementById('app')
)
