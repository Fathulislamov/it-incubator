import styled from "styled-components"
import { theme } from "../theme"

export const Input = styled.input.attrs<{type?: string}>((props) =>({
	type: props.type || 'text'
})) `

	width: 100%;
	height: 37px;
	padding: 8px;
	font-size: 16px;
	font-weight: 400;
	background-color: ${theme.color.background};
	border: 1px solid ${theme.color.default};
	color: ${theme.color.font};

	&::placeholder {
		color: ${theme.color.font};
	}
`
