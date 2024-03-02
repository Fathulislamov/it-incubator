import styled from "styled-components"
import img from '../assets/MainImage.png'
import dots from '../assets/Dots.svg'
import outlineLogo from '../assets/OutlineLogo.svg'

export const Main = () => {
  return (
    <StyleMain>
      <WrapContent>
        <Title>Elias is a web designer and front-end developer</Title>
        <Description>He crafts responsive websites where technologies meet creativity</Description>
        <Button>Contact me !!</Button>
      </WrapContent>
      <WrapImages>
        <Image src={img} />
        <OutlineLogo src={outlineLogo} />
        <Dots src={dots} />
				<CurrentWork>Currently working on Portfolio</CurrentWork>
      </WrapImages>
    </StyleMain>
  )
}

const StyleMain = styled.main`

	display: flex;

`
const WrapContent = styled.div`

`
const Title = styled.h1`

`
const Description = styled.p`

`
const Button = styled.button`

`

const WrapImages = styled.div`
	position: relative;

`
const Image = styled.img`
	border: 2px dashed green

`
const Dots = styled.img`
	position: absolute;

	left: 200px;
`
const OutlineLogo = styled.img`

`
const CurrentWork = styled.span`

`
