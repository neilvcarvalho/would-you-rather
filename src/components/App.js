import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Login'
import Leaderboard from './Leaderboard'
import Navbar from './Navbar'
import Home from './Home'
import QuestionPage from './QuestionPage'
import { handleInitialData } from '../actions/shared'
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
          <Route path='/questions/:id' component={QuestionPage} />
          <Route path='/' exact>
            {
              authedUser
              ? <Home />
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
