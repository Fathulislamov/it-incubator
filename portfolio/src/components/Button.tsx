import styled from "styled-components"
type propsButtonType = {
  title: string
  children: string
}
export const Button = (props: propsButtonType) => {
  return (
    <StyleBtn>{props.title}</StyleBtn>
  )
}

const StyleBtn = styled.button`

`
