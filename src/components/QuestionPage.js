import React, { Component } from 'react'
import Login from './Login'
import QuestionResults from './QuestionResults'
import QuestionOptions from './QuestionOptions'
import { connect } from 'react-redux'

class QuestionPage extends Component {
  render () {
    const { question, authedUser, hasAnswered, users } = this.props

    if (!authedUser) {
      return <Login />
    }

    return (
      <div>
        <h2>{users[question.author].name} asks:</h2>

        {
          hasAnswered
          ? <QuestionResults question={question} authedUser={authedUser} />
          : <QuestionOptions question={question} authedUser={authedUser} />
        }
      </div>
    )
  }
}

function mapStateToProps ({ questions, authedUser, users }, props) {
  const { id } = props.match.params

  return {
    id,
    authedUser,
    users,
    question: authedUser ? questions[id] : null,
    hasAnswered: authedUser && Object.keys(users[authedUser].answers).includes(id)
  }
}

export default connect(mapStateToProps)(QuestionPage)