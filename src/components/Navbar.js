import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Navbar extends Component {
  logout () {
    this.props.dispatch(setAuthedUser(null))
  }

  render () {
    const { authedUser, users } = this.props

    return (
      <header>
        <h1>Would You Rather...?</h1>

        <Link to='/'>Home</Link>
        <Link to='/leaderboard'>Leaderboard</Link>
        <Link to='/add'>New question</Link>

        {
          this.props.authedUser &&
          <p>
            You are logged in as {users[authedUser].name}
            <button onClick={() => this.logout()}>Logout</button>
          </p>
        }
      </header>
    )
  }
}

function mapStateToProps ( { authedUser, users }) {
  return {
    authedUser,
    users
  }
}

export default connect(mapStateToProps)(Navbar)