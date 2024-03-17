import styled from 'styled-components'
import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { DesktopMenu, menuType } from './DesktopMenu'

const menuItems: menuType[] = [
  {
    name: 'home',
    link: '#'
  }, 
  {
    name: 'works',
    link: '#'
  }, 
  {
    name: 'about-me',
    link: '#'
  }, 
  {
    name: 'contacts',
    link: '#'
  }, 

]
export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <WrapHeader>
          <Logo />
					<DesktopMenu menuItems = {menuItems}/>
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
