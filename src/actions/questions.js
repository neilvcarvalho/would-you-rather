import { saveQuestionAnswer } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER'
export const SAVE_QUESTION = 'SAVE_QUESTION'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function handleSaveQuestionAnswer (qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    return saveQuestionAnswer({ authedUser, qid, answer })
      .then(() => dispatch(addQuestionAnswer(authedUser, qid, answer)))
  }
}

function addQuestionAnswer (authedUser, qid, answer) {
  return {
    type: ADD_QUESTION_ANSWER,
    authedUser,
    qid,
    answer
  }
}

export function saveQuestion (authedUser, optionOne, optionTwo) {
  return {
    type: SAVE_QUESTION,
    authedUser,
    optionOne,
    optionTwo
  }
}