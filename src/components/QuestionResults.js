import React, { Component } from 'react'
import QuestionResultCard from './QuestionResultCard'

class QuestionResults extends Component {
  render () {
    const { question, authedUser } = this.props
    const { optionOne, optionTwo } = question
    const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length

    return (
      <div>
        <h3>Results:</h3>

        <QuestionResultCard
          option={optionOne} totalVotes={totalVotes} chosenOption={optionOne.votes.includes(authedUser)}
        />

        <QuestionResultCard
          option={optionTwo} totalVotes={totalVotes} chosenOption={optionTwo.votes.includes(authedUser)}
        />
      </div>
    )
  }
}

export default QuestionResults