import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
  render () {
    const { answeredQuestions, unansweredQuestions, users } = this.props

    return (
      <div>
        <h2>Unanswered</h2>
        <ul>
          {unansweredQuestions.map((question) => (
            <li key={question.id}>
              {users[question.author].name} asks:
              <p>Would you rather...</p>
              <p>{question.optionOne.text}</p> or
              <p>{question.optionTwo.text}</p> or
            </li>
          ))}
        </ul>

        <h2>Answered</h2>

        <ul>
        {answeredQuestions.map((question) => (
            <li key={question.id}>
              {users[question.author].name} asks:
              <p>Would you rather...</p>
              <p>{question.optionOne.text}</p> or
              <p>{question.optionTwo.text}</p> or
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, users, questions }) {
  const answeredQuestionsIds = Object.keys(users[authedUser].answers)
  const unansweredQuestionsIds = Object.keys(questions).filter((question) => !answeredQuestionsIds.includes(question.id))

  return {
    authedUser,
    users,
    questions,
    unansweredQuestions: unansweredQuestionsIds.map((id) => (questions[id])),
    answeredQuestions: answeredQuestionsIds.map((id) => (questions[id]))
  }
}

export default connect(mapStateToProps)(Home)