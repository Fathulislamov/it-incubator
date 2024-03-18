import styled from 'styled-components'
import { Container } from '../components/Container'
import { DesktopHeader } from './DesktopHeader'
import { MobileHeader } from './MobileHeader'

export type menuItemsType = {
  name: string
  link: string
}

export type menuItemsPropsType = {
  menuItems: menuItemsType[]
}

const menuItems: menuItemsType[] = [
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
        <DesktopHeader menuItems={menuItems} />
        <MobileHeader menuItems={menuItems} />
      </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
`
