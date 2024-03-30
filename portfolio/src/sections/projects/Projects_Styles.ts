import styled from "styled-components"
import { theme } from "../../theme"

const StyleProjects = styled.section`
	margin-top: 46px;
	overflow: hidden;
`

const ViewLink = styled.a`
	text-align: center;
	white-space: nowrap;
	margin: 0 -2px 0 20px;
`

const WrapProjects = styled.div`
	position: relative;
	&::after{
		content: '';
		width: 88px;
		height: 153px;
		position: absolute;
		top: 270px;
		right: -193px;
		border: 1px solid ${theme.color.default};
		border-right: 1px solid ${theme.color.background};
		overflow: clip;
	}
`

const WrapTitle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 49px; 
`

const Cards = styled.div`
	display: flex;
	gap: 15px;
	justify-content: center;
	align-items: flex-start;
	flex-wrap: wrap;
`

export const S = {
  StyleProjects,
  ViewLink,
  WrapProjects,
  WrapTitle,
  Cards
}
