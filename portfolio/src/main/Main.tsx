import styled from "styled-components"
import img from '../assets/MainImage.png'
import dots from '../assets/Dots.svg'
import { Container } from "../components/Container"
import { Button } from "../components/Button"
import { theme } from "../theme"
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
            <WrapComposition>
              <Image src={img} />
              <BackgroundIcon src={logo} />
              {/*<Dots src={dots} />
            <CurrentWork><span>Currently working on Portfolio</span></CurrentWork>
						*/}
            </WrapComposition>
          </WrapImages>
        </WrapMain>
      </Container>
    </StyleMain>
  )
}

const StyleMain = styled.main`
	margin: 70px 0;
`
const WrapMain = styled.div`
	display: flex;
	gap: 40px;
`
const WrapContent = styled.div`
	max-width: 50%;
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
const WrapComposition = styled.div`

`
const Image = styled.img`
	border: 2px dashed ${theme.color.default};
	max-width: 457px; 
	object-fit: cover;
	width: 100%;
	flex-grow: 1;

`
const BackgroundIcon = styled.img`
	max-width: 155px;
	width: 34%;
	position: absolute;
	top: 59%;
	left: -11px;
	z-index: -1;
`
const Dots = styled.img`
	position: absolute;
	right: 16px;
	bottom: 95px;
`
const CurrentWork = styled.div`
	border: 2px solid ${theme.color.default};
	padding: 8px 0 8px 33px;
	max-width: 402px;
	margin-left: 52px; 
	margin-top: -6px;
	position: relative;
	&::before{
		content: '';
		width: 16px;
		height: 16px;
		background-color: ${theme.color.accent};
		position: absolute;
		top: 11px;
		left: 8px;

	}
	
`
