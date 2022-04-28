import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    handleLogin(this.state)
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/app/catalog`)
    }

    return (
      <>
      <div className="login-form">
        <h1>Log in</h1>
        <form
          method="post"
          onSubmit={event => {
            this.handleSubmit(event)
            navigate(`/app/catalog`)
          }}
        >
          <table>
            <tr>
              <td>Username</td>
              <td><input type="text" name="username" onChange={this.handleUpdate} /></td>
            </tr>
            <tr>
              <td>Password</td>
              <td><input
              type="password"
              name="password"
              onChange={this.handleUpdate}
            /></td>
            </tr>
            <tr>
              <td></td>
              <td style={{display: `flex`, justifyContent:`start`}} colSpan={2}><input type="submit" value="Log In" /></td>
             
            </tr>
          </table>
        </form>
      </div>
      </>
    )
  }
}

export default Login