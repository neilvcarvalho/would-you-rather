import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Home extends Component {
  state = {
    currentTab: 'unanswered'
  }

  changeTab = (newTab) => {
    this.setState(() => ({
      currentTab: newTab
    }))
  }

  render () {
    const { answeredQuestions, unansweredQuestions, users } = this.props
    const shownQuestions = this.state.currentTab === 'unanswered' ? unansweredQuestions : answeredQuestions

    return (
      <div>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className={`nav-link ${this.state.currentTab === 'unanswered' ? 'active' : ''}`} href="#" onClick={() => { this.changeTab('unanswered') }}>Unanswered</a>
          </li>
          <li className="nav-item">
          <a className={`nav-link ${this.state.currentTab === 'answered' ? 'active' : ''}`} href="#" onClick={() => { this.changeTab('answered') }}>Answered</a>
          </li>
        </ul>

        {
          shownQuestions.length > 0
          ? <ul>
              {shownQuestions.map((question) => (
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
          : <p>There are no {this.state.currentTab} questions</p>
        }

      </div>
    )
  }
}

function mapStateToProps ({ authedUser, users, questions }) {
  const answeredQuestionsIds = Object.keys(users[authedUser].answers)
  const unansweredQuestionsIds = Object.keys(questions).filter((qid) => !answeredQuestionsIds.includes(qid))

  return {
    authedUser,
    users,
    questions,
    unansweredQuestions: unansweredQuestionsIds.map((id) => (questions[id])).sort((a,b) => (b.timestamp - a.timestamp)),
    answeredQuestions: answeredQuestionsIds.map((id) => (questions[id])).sort((a,b) => (b.timestamp - a.timestamp))
  }
}

export default connect(mapStateToProps)(Home)