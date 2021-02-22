export default function QuestionResultCard (props) {
  const optionVotes = props.option.votes.length
  const totalVotes = props.totalVotes
  const votingPercentage = optionVotes / totalVotes * 100

  return (
    <div className={props.chosenOption ? 'votingOption chosen' : 'votingOption'}>
      <p>Would you rather {props.option.text}?</p>
      {optionVotes} out of {totalVotes} votes ({votingPercentage}%)

      <div className="progress-bar" role="progressbar" style={{width: `${votingPercentage}%`}} aria-valuenow={votingPercentage} aria-valuemin="0" aria-valuemax="100">{votingPercentage}%</div>
    </div>
  )
}