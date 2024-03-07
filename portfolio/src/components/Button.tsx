import styled from "styled-components"

type propsButtonType = {
  children: string
}
export const Button = (props: propsButtonType) => {
  return (
    <StyleBtn>{props.children}</StyleBtn>
  )
}

const StyleBtn = styled.button`

`
