import { Logo } from "../components/Logo";
import { DeviceHeaderPropsType, menuItemsType } from "./Header";
import { Svg } from "../components/Svg";
import { S } from './Header_Styles'
import styled from "styled-components";
import { Container } from "../components/Container";
import { theme } from "../theme";

export const DesktopHeader = (props: DeviceHeaderPropsType) => {
  return (
    <FixedHeader>
      <S.DesktopMedia>
        {props.icons.map((item, index) => {
          return (
            <Svg iconId={item} width='32' key={index} />
          )
        })}
      </S.DesktopMedia>
      <Container>
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
      </Container>
    </FixedHeader>

  )
}
const FixedHeader = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	@media screen and (max-width: 1368px){
		padding-left: 50px;
	}
	@media ${theme.media.tablet}{
		padding-left: 0;
	}
`
