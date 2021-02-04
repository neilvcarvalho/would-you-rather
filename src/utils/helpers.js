export function formattedUser (user) {
  return (
    <div>
      <img src={user.avatarURL} alt={`Avatar of ${user.name}`}/>
      <p>{user.name}</p>
      <p>Questions asked: {user.questions.length}</p>
      <p>Answers given: {Object.keys(user.answers).length}</p>
    </div>
  )
}