import React from 'react'
import ReactDOM from 'react-dom'

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let username = event.target.username.value;
    let password = event.target.password.value;
    this.setState({ username, password });

    console.log('State ->', this.state);
    this.clearInput();
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  clearInput() {
    this.setState({ username: '', password: '' });
  }

  render () {
    return (
      <div id='container'>
        <div id='navbar'>
          Form.js
        </div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='username'>Username:</label>
          <input
            type='text'
            name='username'
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label htmlFor='password'>Password:</label>
          <input
            type='text'
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
          />
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
