import React, { Component } from 'react'
import Login from './Login'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render () {
    const { authedUser } = this.props

    return (
      <div className="App">
        <h1>Would You Rather...?</h1>

        {
          authedUser
          ? <p>You are logged in as {authedUser}</p>
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
