import React from 'react'
import ReactDOM from 'react-dom'

class Form extends React.Component {

  submitHandler(event) {
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
        <form onSubmit={this.submitHandler}>
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
