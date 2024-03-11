import styled from "styled-components"
import { theme } from "../theme"

type propsButtonType = {
  children: string
  colored?: boolean
}

type propsStyleBtnType = {
  colored: boolean
}

export const Button = (props: propsButtonType) => {
  return (
    <StyleBtn colored = {props.colored || false}>{props.children}</StyleBtn>
  )
}

const StyleBtn = styled.button<propsStyleBtnType>`
	border-width: 1px; 
	border-style: solid;
	border-color: ${props => props.colored ? theme.color.accent : theme.color.default};
	background-color: ${theme.color.background};
	color: ${props => props.colored ? theme.color.font : theme.color.default};
	padding: 8px 16px;
	&:hover{
		background-color: ${props => props.colored ? theme.color.accentLight : theme.color.defaultLight};
	}
	&+& {
		margin-left: 16px;
	}
`
