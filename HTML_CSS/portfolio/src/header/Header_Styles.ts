import styled, { css } from "styled-components"
import { theme } from "../theme"

const Header = styled.header`
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-between;
	top: 0;
	left: 50%;
  transform: translateX(-50%);
	height: 60px;
	width: 100%;
	max-width: 1084px;
	padding: 30px 0 10px 0;
	background-color: ${theme.color.background};
	z-index: 99;

	@media screen and (max-width: 1368px){
		padding-left: 40px;
		left: 50%;
  	transform: translateX(-51%);
	}

	@media ${theme.media.tablet}{
		padding: 0;
	}
`

const WrapDesktopHeader = styled.div`
	display: flex;
	width: 100%;
	height: 48px;
	background-color: ${theme.color.background};
	justify-content: space-between;
	z-index: 100;
`

const DesktopMedia = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: absolute;
	gap: 8px;
	background-color: ${theme.color.background};
	z-index: 99;
	top: 200px;
	left: -124px;

	&::before{
		content: '';
		position: absolute;
		height: 181px;
		width: 1px;
		background-color: ${theme.color.default};
		top: -200px;
		left: 15px;
	}

	@media screen and (max-width: 1368px){
		left: calc(558px - 50vw);
	}

	@media screen and (max-width: 1065px){
		left: 16px;
	}
`

const DesktopNav = styled.nav`
	display: flex;
	align-items: center;
`

const DesktopMenu = styled.ul`
	display: flex;
	gap: 33px;
`

const MenuItem = styled.li`
	span {
		color: ${theme.color.accent};
	}
`

const DesktopMenuLink = styled.a`
	color: ${theme.color.font};
`

const DesktopLanguage = styled.button`
	border: none;
	background-color: transparent;
	width: 40px;
	height: 20px;
	color: ${theme.color.font};
	margin: 0 4px 0 22px;
	position: relative;

	&::before,
	&::after {
		display: inline-block;
		position: absolute;
		content: '';
		width: 8px;
		height: 2px;
		top: 7px;
		background-color: ${theme.color.font};
	}
	&::before{
		right: 0;
		transform: rotate(45deg);
	}
	&::after{
		right: -5px;
		transform: rotate(-45deg);
	}
`

const WrapMobileHeader = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 48px;
	padding: 12px 15px 0 20px;
	background-color: ${theme.color.background};
	z-index: 100;
	display: flex;
`

const Burger = styled.button<{ isOpen: boolean }>`
	border: none;
	background-color: ${theme.color.background};
	width: 32px;
	height: 32px;
	position: absolute;
	display: fixed;
	top: 11px;
	right: 0px;

	&:focus-visible {
		outline: ${theme.color.accent} solid 1px;
	}

	span {
		display: block;
		width: 15px;
		height: 2px;
		background-color: ${theme.color.font};
		position: relative;
		top: 1px;
		right: -4px;
		${props => props.isOpen && css<{ isOpen: boolean }>`
			transform: rotate(45deg);
			width: 24px;
			right: -4px;
		`}
		&::before{
			content: '';
			width: 24px;
			height: 2px;
			background-color: ${theme.color.font};
			position: absolute;
			top: -7px;
			right: 0;
			${props => props.isOpen && css<{ isOpen: boolean }>`
				transform: rotate(-90deg);
				top: 0;
			`}

		}
	}
	${props => props.isOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible"}
`

const MobileNav = styled.nav<{ isOpen: boolean }>`
	position: fixed;
	top: ${props => props.isOpen ? '48px' : '-100vh'};
	left: 0;
	right: 0;
	height: calc(100vh - 48px);
	padding: 50px 16px 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	overflow-y: scroll;
	background-color: ${theme.color.background};
`

const WrapMobileMenu = styled.div`
`

const MobileMenu = styled(DesktopMenu)`
	flex-direction: column;
	gap: 31px;
`

const MobileMenuLink = styled(DesktopMenuLink)`
	display: block;
	font-size: 32px;
	font-weight: 500;
`

const MobileLanguage = styled(DesktopLanguage)`
	width: 100%;
	height: 40px;
	font-size: 32px;
	font-weight: 600;
	margin: 32px 0 0 0;
	text-align: left;
	&::before{
		left: 42px;
	}
	&::after{
		left: 47px;
	}
`

const MobileMedia = styled.div`
	display: flex;
	align-items: end;
	justify-content: start;
	width: 100%;
	justify-content: center;
	margin-bottom: 36px;
`

const MobileWrapIcons = styled.div`
	display: flex;
	gap: 8px;
`

export const S = {
  Header,
  WrapDesktopHeader,
  DesktopMedia,
  DesktopNav,
  DesktopMenu,
  MenuItem,
  DesktopMenuLink,
  DesktopLanguage,
  WrapMobileHeader,
  Burger,
  MobileNav,
  WrapMobileMenu,
  MobileMenu,
  MobileMenuLink,
  MobileLanguage,
  MobileMedia,
  MobileWrapIcons
}
