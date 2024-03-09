import styled from "styled-components"
import img from '../assets/MainImage.png'
import dots from '../assets/Dots.svg'
import { Container } from "../components/Container"
import { Button } from "../components/Button"
import { theme } from "../theme"
import { Icon } from "../components/Icon"
import logo from '../assets/backgroundLogo.png'

export const Main = () => {
  return (
    <StyleMain>
      <Container>
        <WrapMain>
          <WrapContent>
            <Title>Elias is a <span>web designer</span> and <span>front-end developer</span></Title>
            <Description>He crafts responsive websites where technologies meet creativity</Description>
            <Button colored>Contact me!!</Button>
          </WrapContent>
          <WrapImages>
            <Image src={img} />
            <WrapBackgroundIcon>
              <Icon iconId={'outlineLogo'} width={'100%'} />
            </WrapBackgroundIcon>
            <Dots src={dots} />
            <CurrentWork>Currently working on Portfolio</CurrentWork>
          </WrapImages>
        </WrapMain>
        <img src={logo} />

      </Container>
    </StyleMain>
  )
}

const StyleMain = styled.main`
	margin: 70px 0;
`
const WrapMain = styled.div`
	display: flex;
`
const WrapContent = styled.div`

`
const Title = styled.h1`
	margin: 75px 0  0 0;
	span {
		color: ${theme.color.accent}
	}
`
const Description = styled.p`
	margin: 34px 0 21px 0 ;
	line-height: 25px;
	padding-right: 50px;

`

const WrapImages = styled.div`
	position: relative;

`
const Image = styled.img`
	border: 2px dashed ${theme.color.default};
	max-width: 457px; 
	object-fit: cover;
	margin-left: 34px;

`

const WrapBackgroundIcon = styled.div`
	max-width: 155px;
	position: absolute;
	top: 81px;
	left: 23px;

`
const Dots = styled.img`
	position: absolute;

	left: 200px;
`
const OutlineLogo = styled.img`

`
const CurrentWork = styled.span`

`
