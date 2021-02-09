import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveQuestion } from '../actions/questions'

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: ''
  }

  handleInputChange = (event) => {
    const { value, name } = event.target

    this.setState(() => ({
      [name]: value,
    }))
  }

  isValidForm = (state) => {
    const { optionOne, optionTwo } = state

    return optionOne !== '' && optionTwo !== '' && optionOne !== optionTwo
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.dispatch(saveQuestion())
  }


  render () {
    const { optionOne, optionTwo } = this.state
    const isValidForm = optionOne !== '' && optionTwo !== '' && optionOne !== optionTwo

    return (
      <div>
        <h2>New question</h2>

        <form>
          <p>Complete the questions</p>

          <p>Would you rather...</p>

          <input type='text' name='optionOne' value={optionOne} onChange={this.handleInputChange} />
          <p>or</p>
          <input type='text' name='optionTwo' value={optionTwo} onChange={this.handleInputChange} />

          <button onClick={this.handleSubmit} disabled={!isValidForm}>Submit</button>
        </form>
      </div>
    )
  }
}

export default connect()(NewQuestion)