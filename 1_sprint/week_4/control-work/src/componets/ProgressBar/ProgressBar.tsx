
export type ProgressBarType = {
  maxNumber: number
  currentNumber: number
}


export const ProgressBar = ({ maxNumber, currentNumber }: ProgressBarType) => {
  const barStyle = {
    width: '100%',
    height: '10px',
		border: '1px solid blue',
		borderRadius: '10px',
  }
  const progressStyle = {
    width: `${(currentNumber * 100) / maxNumber}%`,
    height: '100%',
		backgroundColor: 'blue',
  }
  return (
    <div style={barStyle}>
      <div style={progressStyle}></div>

    </ div>
  )
}
