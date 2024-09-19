import styled from "styled-components"
import { BorderDiv } from "../BorderDiv"
import { theme } from "../../theme"

const Popup = styled(BorderDiv) <{ popupIsOpen: boolean }>`
	width: 95%;
	max-width: 569px;
	min-height: 342px;
	padding: 32px;
	position: fixed;
  top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: ${theme.color.background};
	z-index: 1000;
`
const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 300;
  background: rgba(0, 0, 0, 0.5);
	filter: blur(10px);
`
const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 16px;
	align-items: flex-start;
`
const WrapInputs = styled.div`
	display: flex;
	gap: 16px;
	@media ${theme.media.mobile} {
  flex-wrap: wrap;
}

`
const Message = styled.textarea`
	width: 100%;
	padding: 8px;
	font-family: Fira Code;
	font-size: 16px;
	font-weight: 400;
	height: 119px;
	background-color: ${theme.color.background};
	border: 1px solid ${theme.color.default};
	color: ${theme.color.font};

	&::placeholder {
  color: ${theme.color.font};
}
`
const WrapButtons = styled.div`
	width: 100% ;
	display: flex;
	justify-content: space-between;

`
export const S = {
  Popup,
  Overlay,
  Form,
  WrapInputs,
  Message,
  WrapButtons
}
