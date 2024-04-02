import styled from "styled-components"
import { BorderDiv } from "../BorderDiv"
import { theme } from "../../theme"

//${ document.body.style.filter = "blur(5px)"};
const Popup = styled(BorderDiv) <{ popupIsOpen: boolean }>`
	width: 95%;
	max-width: 569px;
	min-height: 342px;
	padding: 32px;
	position: relative;
  top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: ${theme.color.background};
	${props => props.popupIsOpen ? "body { overflow: hidden; }" : "body { overflow: visible; }"};

	z-index: 400;
`
const Overlay = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: 300;
background-color: 3px;
	filter: blur(1px);

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
@media ${ theme.media.mobile } {
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
background-color: ${ theme.color.background };
border: 1px solid ${ theme.color.default };
color: ${ theme.color.font };

	&::placeholder {
  color: ${ theme.color.font };
}
`
const WrapButtons = styled.div`
width: 100% ;
display: flex;
justify-content: space - between;

`
export const S = {
  Popup,
  Overlay,
  Form,
  WrapInputs,
  Message,
  WrapButtons
}
