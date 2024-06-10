import './ButtonStyle.css'

export type ButtonPropsType = {
  onClickHandler: () => void
  children?: string
	disabled?: boolean
}

export const Button = ({ onClickHandler, children, disabled }: ButtonPropsType) => {
  return (
    <button onClick={onClickHandler} disabled = {disabled} className="button">{children}</button>
  )
}
