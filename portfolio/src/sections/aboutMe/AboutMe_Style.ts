import styled from "styled-components"
import { theme } from "../../theme"
import { Button } from "../../components/Button"

const StyleAboutMe = styled.section`
	overflow-x: hidden;
`

const WrapAboutMe = styled.div`
	display: flex;
	position: relative;
	gap: 24px;

	&::after{
		content: '';
		width: 88px;
		height: 153px;
		position: absolute;
		top: 92px;
		left: -181px;
		border: 1px solid ${theme.color.default};
		border-left: 1px solid ${theme.color.background};
	}
	
	@media ${theme.media.tablet}{
		flex-direction: column;
		align-items: center;
	}
`

const WrapDescription = styled.div`
	color: ${theme.color.default};
	line-height: 26px;
	width: 100%;
`

const Title = styled.h3`
	font-size: 16px;
	font-weight: 400;
	margin: 24px 0;
`

const Description = styled.p`
	margin-bottom: 27px;
`

const ModifButton = styled(Button)`
	padding: 5px 16px;
`

const WrapImage = styled.div`
	position: relative;
	display: flex;
	justify-content: flex-end;
	width: 100%;

	& svg:first-child{
		position: absolute;
		top: 18px;
		right: 260px;
		z-index: 1;
	}

	& svg:nth-child(2){
		position: absolute;
		width: 105px;
		height: 67px;
		top: 235px;
		right: 14px;
		z-index: 1;
	}

	& svg:nth-child(3){
		position: absolute;
		width: 106px;
		top: 262px;
		right: -180px;
	}

	@media ${theme.media.tablet}{
		width: min-content;
	}
`

const WrapImg = styled.div`
	display: flex;
	max-width: 339px;
	margin-top: -46px; 
	position: relative;
	&::before{
		position: absolute;
		bottom: 0;
		right: 24px;
		content: '';
		width: 80%;
		height: 1px;
		background-color: ${theme.color.accent};
		z-index: 1;
	}

	@media ${theme.media.tablet}{
		margin-top: 0;
	}
`

const Img = styled.img`
	width: 100vw;
	object-fit: cover;
	border: 2px dashed ${theme.color.default};
`

export const S = {
  StyleAboutMe,
  WrapAboutMe,
  WrapDescription,
  Title,
  Description,
  ModifButton,
  WrapImage,
  WrapImg,
  Img
}
