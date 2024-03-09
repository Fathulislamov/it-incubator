import styled from 'styled-components'
import { Icon } from '../components/Icon'
import { theme } from '../theme'
import { Container } from '../components/Container'


export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <WrapHeader>
          <WrapLogo>
            <Icon iconId={'defaultLogo'} width="16px" />
            <Name>Elias</Name>
          </WrapLogo>
          <Nav>
            <Menu>
              <NavItem>#home</NavItem>
              <NavItem>#works</NavItem>
              <NavItem>#about-me</NavItem>
              <NavItem>#contacts</NavItem>
            </Menu>
            <Language>EN</Language>
          </Nav>
        </WrapHeader>
      </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
`
const WrapHeader = styled.div`
	display: flex;
	align-items: center;
	margin-top: 32px;
	justify-content: space-between
`
const WrapLogo = styled.div`
`
const Name = styled.span`
	margin-left: 6px;
`
const Nav = styled.nav`
	display: flex;
	align-items: center
`
const Menu = styled.ul`
	display: flex;
	gap: 30px;
`
const NavItem = styled.li`
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
