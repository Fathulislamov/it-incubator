import styled from 'styled-components'
import { Container } from '../components/Container'
import { DesktopHeader } from './DesktopHeader'
import { MobileHeader } from './MobileHeader'
import { theme } from '../theme'

export type menuItemsType = {
  name: string
  link: string
}

export type DeviceHeaderPropsType = {
  icons: mediaIconsType
  menuItems: menuItemsType[]
}

export type mediaIconsType = string[]

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


const mediaIcons: mediaIconsType = ['github', 'dribble', 'figma']

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <DesktopHeader menuItems={menuItems} icons={mediaIcons} />
        <MobileHeader menuItems={menuItems} icons={mediaIcons} />
      </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
	position: relative;
	height: 48px;
	background-color: ${theme.color.background};
	z-index: 99;
`
