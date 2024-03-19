import styled, { css } from "styled-components";
import { Logo } from "../components/Logo";
import { DeviceHeaderPropsType } from "./Header";
import { theme } from "../theme";
import { Svg } from "../components/Svg";

export const MobileHeader = (props: DeviceHeaderPropsType) => {
  return (
    <WrapMobileHeader>
      <WrapHeader>
        <Logo />
        <Burger isOpen={true}><span></span></Burger>
      </WrapHeader>
      <Nav>
        <WrapMenu>
          <Menu>
            {props.menuItems.map((item: { name: string; link: string }) => {
              return (
                <MenuItem>
                  <MenuLink href={item.link}><span>#</span>{item.name}</MenuLink>
                </MenuItem>
              )
            })}
          </Menu>
          <Language>EN</Language>
        </WrapMenu>
        <Media>
          <WrapIcons>
            {props.icons.map((item) => {
              return (
                <Svg iconId={item} width='64' />
              )
            })}
          </WrapIcons>
        </Media>
      </Nav>
    </WrapMobileHeader>

  )
}
const WrapMobileHeader = styled.div`
	display: none;
	min-height: 640px;
	height: 100%;
	flex-direction: column;
	justify-content: flex-end;
	@media ${theme.media.tablet} {
		display: flex;
	}

`
const WrapHeader = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 48px;
	padding: 20px 17px 9px;
	z-index: 100;

`
const Burger = styled.button<{ isOpen: boolean }>`
	border: none;
	background-color: ${theme.color.background};
	width: 32px;
	height: 32px;
	position: absolute;
	top: 0;
	right: 0;
	display: fixed;
	top: 11px;
	right: 13px;
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

`
const Nav = styled.nav`
	position: fixed;
	top: 48px;
	left: 0;
	right: 0;
	bottom: 0;
	padding: 50px 16px 0;
	z-index: 99;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	overflow: scroll;
`
const WrapMenu = styled.div`
`
const Menu = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 31px;
`
const MenuItem = styled.li`
	span {
		color: ${theme.color.accent};
	}

`
const MenuLink = styled.a`
	display: block;
	color: ${theme.color.font};
	font-size: 32px;
	font-weight: 500;
`
const Language = styled.button`
	border: none;
	background-color: transparent;
	width: 100%;
	height: 40px;
	color: ${theme.color.font};
	position: relative;
	font-size: 32px;
	font-weight: 600;
	margin-top: 32px;
	text-align: left;
	&::before,
	&::after {
		display: inline-block;
		position: absolute;
		content: '';
		width: 8px;
		height: 2px;
		top: 18px;
		background-color: ${theme.color.font};
	}
	&::before{
		left: 42px;
		transform: rotate(45deg);
	}
	&::after{
		left: 47px;
		transform: rotate(-45deg);
	}
`

const Media = styled.div`
	display: flex;
	align-items: end;
	justify-content: start;
	width: 100%;
	justify-content: center;
	z-index: 99;
	margin-left: -16px;
	margin-bottom: 36px;
`
const WrapIcons = styled.div`
	display: flex;
	gap: 8px;
`
