import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
  handleLogin(e, userId) {
    e.preventDefault()

    const { dispatch } = this.props

    dispatch(setAuthedUser(userId))
  }

  render() {
    return (
      this.props.users
        ? <ul>{
            this.props.userIds.map((id) => (
              <li key={id}><button onClick={(e) => this.handleLogin(e, id) }>{this.props.users[id].name}</button></li>)
            )
          }</ul>
        : null
    )
  }
}

function mapStateToProps ( { users }) {
  return {
    userIds: Object.keys(users),
    users
  }
}

export default connect(mapStateToProps)(Login)