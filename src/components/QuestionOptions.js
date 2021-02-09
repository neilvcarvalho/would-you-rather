import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestionAnswer } from '../actions/questions'

class QuestionOptions extends Component {
  state = {
    vote: null
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.dispatch(handleSaveQuestionAnswer(this.props.question.id, this.state.vote))
  }

  handleOptionChange = (e) => {
    this.setState(() => ({
      vote: e.target.value
    }))
  }

  render () {
    const { question } = this.props

    return (
      <div>
        <p>Would you rather...</p>

        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type='radio' name='answer' value='optionOne' onChange={this.handleOptionChange} />
          <label htmlFor='optionOne'>{question.optionOne.text}</label>

          <input type='radio' name='answer' value='optionTwo' onChange={this.handleOptionChange} />
          <label htmlFor='optionTwo'>{question.optionTwo.text}</label>

          <input type='submit' value='Submit' disabled={this.state.vote === null } />
        </form>
      </div>
    )
  }
}

export default connect()(QuestionOptions)