import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formattedUser } from '../utils/helpers'

class Leaderboard extends Component {
  render () {
    const { users } = this.props
    const userIds = Object.keys(users)

    return (
      <div>
        <h1>Leaderboard</h1>

        <ul>
          {userIds.map((id) => {
            const user = users[id]

            return <li key={id}>{formattedUser(user)}</li>
          })}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ( { users }) {
  const calculateScore = (user) => (Object.keys(user.answers).length + user.questions.length)

  return {
    users: Object.values(users).sort((a,b) => (calculateScore(b) - calculateScore(a)))
  }
}

export default connect(mapStateToProps)(Leaderboard)