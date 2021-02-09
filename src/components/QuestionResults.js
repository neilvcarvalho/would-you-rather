import React, { Component } from 'react'

class QuestionResults extends Component {
  render () {
    const { question, authedUser } = this.props
    const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length

    return (
      <div>
        <p>Results:</p>

        <div className={question.optionOne.votes.includes(authedUser) ? 'chosenOption' : ''}>
          Would you rather {question.optionOne.text}?
          {question.optionOne.votes.length} out of {totalVotes} votes ({question.optionOne.votes.length / totalVotes * 100}%)
        </div>

        <div className={question.optionTwo.votes.includes(authedUser) ? 'chosenOption' : ''}>
          Would you rather {question.optionTwo.text}?
          {question.optionTwo.votes.length} out of {totalVotes} votes ({question.optionTwo.votes.length / totalVotes * 100}%)
        </div>
      </div>
    )
  }
}

export default QuestionResults