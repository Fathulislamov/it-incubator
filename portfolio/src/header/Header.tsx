import { Container } from '../components/Container'
import { DesktopHeader } from './DesktopHeader'
import { MobileHeader } from './MobileHeader'
import { useEffect, useState } from 'react'
import {S} from './Header_Styles'
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


  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = 768

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);


  return (
    <S.Header>
        {width > breakpoint ?
          <DesktopHeader menuItems={menuItems} icons={mediaIcons} /> :
          <MobileHeader menuItems={menuItems} icons={mediaIcons} />
        }
    </S.Header>
  )
}


