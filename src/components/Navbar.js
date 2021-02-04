import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Navbar extends Component {
  logout () {
    this.props.dispatch(setAuthedUser(null))
  }

  render () {
    const { authedUser } = this.props

    return (
      <header>
        <h1>Would You Rather...?</h1>
        {
          this.props.authedUser
          ? <React.Fragment>
              <Link to='/'>Home</Link>
              <Link to='/leaderboard'>Leaderboard</Link>

              <p>
                You are logged in as {authedUser}
                <button onClick={() => this.logout()}>Logout</button>
              </p>
            </React.Fragment>
          : null
      }
      </header>
    )
  }
}

function mapStateToProps ( { authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(Navbar)