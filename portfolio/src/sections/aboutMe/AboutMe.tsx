import styled from "styled-components"
import { SectionTitle } from "../../components/SectionTitle"
import { Button } from "../../components/Button"
import dots from '../../assets/Dots.svg'
import image from '../../assets/Image-2.png'
import { Container } from "../../components/Container"
import { theme } from "../../theme"
export const AboutMe = () => {
  return (
    <StyleAboutMe>
      <Container>
        <SectionTitle firstSymbol='#' maxLineWidth='326px'>about-me</SectionTitle>
        <WrapAboutMe>
          <WrapDescription>
            <Title>Hello, i’m Elias! </Title>
            <Description>I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.</Description>
            <Description>Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</Description>
            <ModifButton colored>Read more -&gt;</ModifButton>
          </WrapDescription>
          <Img src={dots}></Img>
          <Img src={image}></Img>
        </WrapAboutMe>
      </Container>
    </StyleAboutMe>
  )
}
const StyleAboutMe = styled.section`

`
const WrapAboutMe = styled.div`
	display: flex;
`
const WrapDescription = styled.div`
	color: ${theme.color.default};
	max-width: 515px;
	line-height: 26px;

`
const Title = styled.h3`
	font-size: 16px;
	font-weight: 400;
	margin: 24px 0;
`
const Description = styled.p`
	margin-bottom: 27px;
`
const ModifButton = styled(Button)`
	padding: 5px 16px;
`
const Img = styled.img`

`
