import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
              <h3>Would you rather...</h3>
              <p>
                <strong>{question.optionOne.text}</strong> or&nbsp;
                <strong>{question.optionTwo.text}</strong>?
              </p>
              <Link to={`/questions/${question.id}`}>View poll</Link>
            </li>
          ))}
        </ul>

        <h2>Answered</h2>

        <ul>
        {answeredQuestions.map((question) => (
            <li key={question.id}>
            {users[question.author].name} asks:
            <h3>Would you rather...</h3>
            <p>
              <strong>{question.optionOne.text}</strong> or&nbsp;
              <strong>{question.optionTwo.text}</strong>?
            </p>
            <Link to={`/questions/${question.id}`}>View poll</Link>
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
    unansweredQuestions: unansweredQuestionsIds.map((id) => (questions[id])).sort((a,b) => (b.timestamp - a.timestamp)),
    answeredQuestions: answeredQuestionsIds.map((id) => (questions[id])).sort((a,b) => (b.timestamp - a.timestamp))
  }
}

export default connect(mapStateToProps)(Home)