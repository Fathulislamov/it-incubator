import styled, { css } from "styled-components";
import { Logo } from "../components/Logo";
import { theme } from "../theme";
import { menuItemsPropsType } from "./Header";

export const DesktopHeader = (props: menuItemsPropsType) => {
  return (
    <WrapHeader>
      <Logo />
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
    </WrapHeader>

  )
}
const WrapHeader = styled.div`
	display: flex;
	align-items: center;
	margin-top: 32px;
	justify-content: space-between;

	@media ${theme.media.tablet} {
		display: none;
	}
`
const Nav = styled.nav`
	display: flex;
	align-items: center;
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
