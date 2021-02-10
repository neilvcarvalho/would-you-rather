import React, { Component } from 'react'
import QuestionResults from './QuestionResults'
import QuestionOptions from './QuestionOptions'
import { connect } from 'react-redux'

class QuestionPage extends Component {
  render () {
    const { question, authedUser, hasAnswered, author } = this.props

    if (!question) {
      return <h2>This question does not exist</h2>
    }

    return (
      <div>
        <div className='row'>
          <h2>{author.name} asks:</h2>
        </div>

        <div className='row'>
          <div className='col'>
            <img className='avatar small' src={author.avatarURL} alt={`Avatar of ${author.name}`}/>
          </div>

          <div className='col'>
            {
              hasAnswered
              ? <QuestionResults question={question} authedUser={authedUser} />
              : <QuestionOptions question={question} authedUser={authedUser} />
            }
          </div>

        </div>
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
    author: questions[id] && users[questions[id].author],
    question: questions[id],
    hasAnswered: Object.keys(users[authedUser].answers).includes(id)
  }
}

export default connect(mapStateToProps)(QuestionPage)