import styled from 'styled-components'
import logo from '../assets/DefaultLogo.svg'


export const Header = () => {
  return (
    <StyledHeader>
      <WrapLogo>
        <Logo src={logo} />
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
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
	width: 100%;
	border: 2px solid red;
	display: flex;
	justify-content: space-between;

`
const WrapLogo = styled.div`
	display: flex;
	align-items: center;
	gap: 30px;

`
const Logo = styled.img`
	 
`
const Name = styled.span`

`
const Nav = styled.nav`
	
`
const Menu = styled.ul`
	display: flex;
	gap: 30px;
`
const NavItem = styled.li`
`
const Language = styled.span`

`
