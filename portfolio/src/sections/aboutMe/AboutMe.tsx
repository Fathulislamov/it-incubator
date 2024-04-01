import { SectionTitle } from "../../components/SectionTitle"
import image from '../../assets/Image-2.png'
import { Container } from "../../components/Container"
import { Svg } from "../../components/Svg"
import { S } from './AboutMe_Style'

export const AboutMe = () => {
  return (
    <S.StyleAboutMe>
      <Container>
        <SectionTitle firstSymbol='#' width='calc(50vw - 230px)' maxLineWidth='322px'>about-me</SectionTitle>
        <S.WrapAboutMe>
          <S.WrapDescription>
            <S.Title>Hello, i’m Elias! </S.Title>
            <S.Description>I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.</S.Description>
            <S.Description>Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</S.Description>
            <S.ModifButton colored>Read more -&gt;</S.ModifButton>
          </S.WrapDescription>
          <S.WrapImage>
            <Svg iconId='dots' width='84px' />
            <Svg iconId='dots2' width='104px' />
            <Svg iconId='dots3' width='104px' />
            <S.WrapImg>
              <S.Img src={image} />
            </S.WrapImg>
          </S.WrapImage>
        </S.WrapAboutMe>
      </Container>
    </S.StyleAboutMe>
  )
}
