import { Logo } from "../components/Logo";
import { DeviceHeaderPropsType } from "./Header";
import { Svg } from "../components/Svg";
import { useState } from "react";
import { S } from './Header_Styles'


export const MobileHeader = (props: DeviceHeaderPropsType) => {

  const [menuIsOpen, setmenuIsOpen] = useState(false)
  const onButtonBtnClick = () => { setmenuIsOpen(!menuIsOpen) }

  return (
    <>
      <S.WrapMobileHeader>
        <Logo />
        <S.Burger isOpen={menuIsOpen} onClick={onButtonBtnClick}><span></span></S.Burger>
      </S.WrapMobileHeader>
      <S.MobileNav isOpen={menuIsOpen}>
        <S.WrapMobileMenu>
          <S.MobileMenu>
            {props.menuItems.map((item: { name: string; link: string }, index) => {
              return (
                <S.MenuItem key={index}>
                  <S.MobileMenuLink href={item.link} key={index}><span>#</span>{item.name}</S.MobileMenuLink>
                </S.MenuItem>
              )
            })}
          </S.MobileMenu>
          <S.MobileLanguage>EN</S.MobileLanguage>
        </S.WrapMobileMenu>
        <S.MobileMedia>
          <S.MobileWrapIcons>
            {props.icons.map((item, index) => {
              return (
                <Svg iconId={item} width='64' key={index}/>
              )
            })}
          </S.MobileWrapIcons>
        </S.MobileMedia>
      </S.MobileNav>
    </>

  )
}
