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
      <nav className='navbar navbar-expand-md navbar-dark bg-dark fixed-top'>
        <div className='container-fluid'>
        <Link to='/' className='navbar-brand'>Would You Rather...?</Link>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarsExampleDefault' aria-controls='navbarsExampleDefault' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarsExampleDefault'>
            <ul className='navbar-nav me-auto mb-2 mb-md-0'>
              <li className='nav-item active'>
                <Link to='/' className='nav-link'>Home</Link>
              </li>
              <li className='nav-item'>
                <Link to='/leaderboard' className='nav-link'>Leader Board</Link>
              </li>
              <li className='nav-item'>
                <Link to='/add' className='nav-link'>New question</Link>
              </li>

            </ul>

            {
              this.props.authedUser &&
              <p className='d-flex'>
                <span className='navbar-text'>
                  Welcome, {users[authedUser].name}!
                  &nbsp;
                </span>

                <button className='btn btn-danger btn-small' onClick={() => this.logout()}>
                Logout
                </button>
              </p>
            }
          </div>
        </div>
      </nav>
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