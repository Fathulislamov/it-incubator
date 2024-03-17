import styled from "styled-components"
import { theme } from "../theme"

export type menuType = {
  name: string
  link: string
}

export type menuPropsType = {
  menuItems: menuType[]
}

export const DesktopMenu = (props: menuPropsType[]) => {
  return (
    <Nav>
      <Menu>
        {props.menuItems.map((item: { name: string; link: string }) => {
          return (
            <MenuItem>
              <MenuLink href={item.link}>#{item.name}</MenuLink>
            </MenuItem>
          )
        })}
      </Menu>
      <Language>EN</Language>
    </Nav>
  )
}

const Nav = styled.nav`
	display: flex;
	align-items: center
`
const Menu = styled.ul`
	display: flex;
	gap: 30px;
`
const MenuItem = styled.li`
`
const MenuLink = styled.a`
	color: ${theme.color.font};

`
const Language = styled.button`
	border: none;
	background-color: transparent;
	width: 40px;
	height: 20px;
	color: ${theme.color.font};
	margin-left: 27px;
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
