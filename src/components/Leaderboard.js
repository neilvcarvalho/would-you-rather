import React, { Component } from 'react'
import { connect } from 'react-redux'
import { calculateScore } from '../utils/helpers'

class Leaderboard extends Component {
  render () {
    const { users } = this.props
    const userIds = Object.keys(users)

    return (
      <div>
        <h2>Leader Board</h2>

        <table className='table'>
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Questions asked</th>
              <th>Questions answered</th>
            </tr>
          </thead>

          <tbody>
            {userIds.map((id, index) => {
              const user = users[id]

              return (
                <tr key={id}>
                  <td>{index + 1}</td>
                  <td>
                    <img className='avatar small' src={user.avatarURL} alt={`Avatar of ${user.name}`}/>
                    <p>{user.name}</p>
                  </td>
                  <td>{user.questions.length}</td>
                  <td>{Object.keys(user.answers).length}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
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