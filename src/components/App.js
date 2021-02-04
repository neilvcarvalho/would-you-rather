import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Login'
import Leaderboard from './Leaderboard'
import Navbar from './Navbar'
import { handleInitialData } from '../actions/shared'
import { setAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }


  render () {
    const { authedUser } = this.props

    return (
      <Router>
        <div className="App">
          <Navbar />

          <Route path='/leaderboard' exact component={Leaderboard} />
          <Route path='/' exact>
            {
              authedUser
              ? null
              : <Login />
            }
          </Route>

        </div>
      </Router>
    )
  }
}

function mapStateToProps ( { authedUser, users }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App);
