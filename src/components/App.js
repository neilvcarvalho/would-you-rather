import React, { Component } from 'react'
import Login from './Login'
import { handleInitialData } from '../actions/shared'
import { setAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  logout () {
    this.props.dispatch(setAuthedUser(null))
  }

  render () {
    const { authedUser } = this.props

    return (
      <div className="App">
        <h1>Would You Rather...?</h1>

        {
          authedUser
          ? <p>
              You are logged in as {authedUser}
              <button onClick={() => this.logout()}>Logout</button>
            </p>
          : <Login />
        }
      </div>
    )
  }
}

function mapStateToProps ( { authedUser, users }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App);
