import { saveQuestionAnswer, saveQuestion } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function handleAddQuestionAnswer (qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    return saveQuestionAnswer({ authedUser, qid, answer })
      .then(() => dispatch(addQuestionAnswer(authedUser, qid, answer)))
  }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    return saveQuestion({ author: authedUser, optionOneText, optionTwoText })
      .then((question) => dispatch(addQuestion(question)))
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

function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question
  }
}