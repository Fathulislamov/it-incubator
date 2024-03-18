import styled, { css } from "styled-components";
import { Logo } from "../components/Logo";
import { menuItemsPropsType } from "./Header";
import { theme } from "../theme";

export const MobileHeader = (props: menuItemsPropsType) => {
  return (<>
    <WrapHeader>
      <Logo />
      <Burger isOpen={true}><span></span></Burger>
    </WrapHeader>
    <Nav>
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
    </Nav>
  </>

  )
}
const WrapHeader = styled.div`
	display: none;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 48px;
	padding: 20px 17px 9px;
	z-index: 100;

	@media ${theme.media.tablet} {
		display: block;
	}
`
const Burger = styled.button<{ isOpen: boolean }>`
	border: none;
	background-color: ${theme.color.background};
	width: 50px;
	height: 100%;
	position: absolute;
	top: 0;
	right: 0;
	display: fixed;
	&::focus-visible{
		outline: ${theme.color.accent};
	}
	span {
		display: block;
		width: 15px;
		height: 2px;
		background-color: ${theme.color.font};
		position: relative;
		top: 4px;
		right: -19px;
		${props => props.isOpen && css<{ isOpen: boolean }>`
			transform: rotate(45deg);
			width: 24px;
			right: -10px;
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
	padding: 45px 16px 0;
	z-index: 99;
`
const Menu = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 32px;
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
		top: 22px;
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
