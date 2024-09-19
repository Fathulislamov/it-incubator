import { Logo } from "../components/Logo"
import { Svg } from "../components/Svg"
import { Container } from "../components/Container"
import { S } from './Footer_Styles'

export const Footer: React.FC = () => {
  return (
    <S.StyledFooter>
      <Container>
        <S.WrapFooter>
          <S.WrapSummary>
            <Logo />
            <S.Domain>elias@elias-dev.ml</S.Domain>
            <S.Summary>Web designer and front-end developer</S.Summary>
          </S.WrapSummary>
          <S.WrapMedia>
            <S.Media>Media</S.Media>
            <S.SocialIcon>
              <Svg iconId='github' width='21px' />
              <Svg iconId='figma' />
              <Svg iconId='discord' />
            </S.SocialIcon>
          </S.WrapMedia>
        </S.WrapFooter>
      </Container>
      <S.Copyright>© Copyright 2022. Made by Elias</S.Copyright>
    </S.StyledFooter>
  )
}

