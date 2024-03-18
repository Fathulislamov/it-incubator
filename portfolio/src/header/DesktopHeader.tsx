import styled from "styled-components";
import { Logo } from "../components/Logo";
import { theme } from "../theme";
import { DeviceHeaderPropsType, menuItemsType } from "./Header";
import { Svg } from "../components/Svg";

export const DesktopHeader = (props: DeviceHeaderPropsType) => {
  return (
    <WrapHeader>
      <Media>
        <WrapIcons>
          {props.icons.map((item) => {
            return (
              <Svg iconId={item} width='32' />
            )
          })}
        </WrapIcons>
      </Media>
      <Logo />
      <Nav>
        <Menu>
          {props.menuItems.map((item: menuItemsType) => {
            return (
              <MenuItem>
                <MenuLink href={item.link}><span>#</span>{item.name}</MenuLink>
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
	position: relative;

	@media ${theme.media.tablet} {
		display: none;
	}
`
const Media = styled.div`
	display: flex;
	align-items: end;
	justify-content: start;
	position: fixed;
	width: 200px;
	height: 311px;
	top: 0px;
	left: calc(100vw/2 - 672px);

	@media screen and (max-width: 1360px){
		left: 1vw;
	}

	@media screen and (max-width: 1100px){
	//	display: none;
	}
`
const WrapIcons = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	position: relative;
	&::before{
		content: '';
		height: 191px;
		width: 1px;
		background-color: ${theme.color.default};
		position: absolute;
		top: -200px;
		left: 15px;
		z-index: 2;
	}

`
const Nav = styled.nav`
	display: flex;
	align-items: center;
`
const Menu = styled.ul`
	display: flex;
	gap: 33px;
`
const MenuItem = styled.li`
	span {
		color: ${theme.color.accent};
	}
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
