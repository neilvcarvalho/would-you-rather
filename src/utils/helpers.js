export function calculateScore (user) {
  return (Object.keys(user.answers).length + user.questions.length)
}
