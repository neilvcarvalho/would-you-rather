import React, { Component } from 'react'
import Login from './Login'
import { connect } from 'react-redux'

class QuestionPage extends Component {
  render () {
    const { question, authedUser } = this.props

    if (!authedUser) {
      return <Login />
    }

    return (
      <div>
        <h2>Would you rather...</h2>

        <p>{question.optionOne.text} or </p>
        <p>{question.optionTwo.text}?</p>
      </div>
    )
  }
}

function mapStateToProps ({ questions, authedUser, users }, props) {
  const { id } = props.match.params

  return {
    id,
    authedUser,
    question: authedUser ? questions[id] : null,
    hasAnswered: authedUser && Object.keys(users[authedUser].answers).includes(id)
  }
}

export default connect(mapStateToProps)(QuestionPage)