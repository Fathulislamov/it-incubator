import { Logo } from "../components/Logo";
import { DeviceHeaderPropsType, menuItemsType } from "./Header";
import { Svg } from "../components/Svg";
import { S } from './Header_Styles'

export const DesktopHeader: React.FC<DeviceHeaderPropsType> = (props: DeviceHeaderPropsType) => {
  return (
    <>
      <S.DesktopMedia>
        {props.icons.map((item, index) => {
          return (
            <Svg iconId={item} width='32' key={index} />
          )
        })}
      </S.DesktopMedia>
      <S.WrapDesktopHeader>
        <Logo />
        <S.DesktopNav>
          <S.DesktopMenu>
            {props.menuItems.map((item: menuItemsType, index) => {
              return (
                <S.MenuItem key={index}>
                  <S.DesktopMenuLink href={item.link} ><span>#</span>{item.name}</S.DesktopMenuLink>
                </S.MenuItem>
              )
            })}
          </S.DesktopMenu>
          <S.DesktopLanguage>EN</S.DesktopLanguage>
        </S.DesktopNav>
      </S.WrapDesktopHeader>
    </>
  )
}
