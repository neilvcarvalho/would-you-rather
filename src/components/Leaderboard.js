import React, { Component } from 'react'
import { connect } from 'react-redux'
import { calculateScore } from '../utils/helpers'

class Leaderboard extends Component {
  render () {
    const { users } = this.props
    const userIds = Object.keys(users)

    return (
      <div>
        <h2>Leaderboard</h2>

        <ul>
          {userIds.map((id) => {
            const user = users[id]

            return <li key={id}>
              <div>
                <img src={user.avatarURL} alt={`Avatar of ${user.name}`}/>
                <p>{user.name}</p>
                <p>Questions asked: {user.questions.length}</p>
                <p>Answers given: {Object.keys(user.answers).length}</p>
              </div>
            </li>
          })}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ( { users }) {
  return {
    users: Object.values(users).sort((a,b) => (calculateScore(b) - calculateScore(a)))
  }
}

export default connect(mapStateToProps)(Leaderboard)