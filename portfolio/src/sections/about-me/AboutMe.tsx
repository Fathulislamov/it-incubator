import styled from "styled-components"
import { SectionTitle } from "../../components/SectionTitle"
import { Button } from "../../components/Button"
import dots from '../../assets/Dots.svg'
import image from '../../assets/Image-2.png'
export const AboutMe = () => {
  return (
    <StyleAboutMe>
      <SectionTitle>about-me</SectionTitle>
      <Title>Hello, i’m Elias! </Title>
      <Description>I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.</Description>
      <Description>Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</Description>
      <Img src={dots}></Img>
      <Img src={image}></Img>
      <Button>Read more</Button>
    </StyleAboutMe>
  )
}
const StyleAboutMe = styled.section`

`
const Title = styled.h3`

`
const Description = styled.p`

`
const Img = styled.img`

`
