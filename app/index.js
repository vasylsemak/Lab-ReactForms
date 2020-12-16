import React from 'react'
import ReactDOM from 'react-dom'

class Form extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value;
    console.log('username ->', username);
  }

  render () {
    return (
      <div id='container'>
        <div id='navbar'>
          Form.js
        </div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='username'>Username:</label>
          <input type='text' name='username' />
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
