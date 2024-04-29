
type ButtonType = {
  name: string
  callBack: () => void
}

export const Button = (props: ButtonType) => {

  const onclickHandler = () => {
    props.callBack()
  }

  return (
    <div>
      <button onClick={onclickHandler}>{props.name}</button>
    </div>
  )
}
