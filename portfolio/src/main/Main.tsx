import styled from "styled-components"
import img from '../assets/MainImage.png'
import dots from '../assets/Dots.svg'
import { Container } from "../components/Container"
import { Button } from "../components/Button"
import { theme } from "../theme"
import logo from '../assets/backgroundLogo.png'
import Typewriter from 'typewriter-effect';


export const Main = () => {
  return (
    <StyleMain>
      <Container>
        <WrapMain>
          <WrapContent>
            <WrapTitle>
              <Title>Elias is a web designer and front-end developer</Title>
              <Typewriter
                options={{
                  strings: [`Elias is a <span class="accent_font">web designer</span> and <span class="accent_font">front-end developer</span>`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </WrapTitle>
            <Description>He crafts responsive websites where technologies meet creativity</Description>
            <Btn colored>Contact me!!</Btn>
          </WrapContent>
          <WrapImages>
            <BackgroundIcon src={logo} />
            <Dots src={dots} />
              <Image src={img} />
            <CurrentWork><span>Currently working on Portfolio</span></CurrentWork>
          </WrapImages>
        </WrapMain>
      </Container>
    </StyleMain>
  )
}

const StyleMain = styled.main`
	margin: 70px 0;
	@media ${theme.media.tablet}{
		margin-top: 0;
	}

`
const WrapMain = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: start;
	gap: 24px;

	@media ${theme.media.tablet}{
		flex-direction: column;
		align-items: center;
	}
`
const WrapContent = styled.div`
	flex-grow: 1;
	width: 100%;

	.Typewriter {
		position: absolute;
		top: 0;
		left: 0;
		line-height: 42px;	
		font-size: 32px;
		font-weight: 600;
		color: ${theme.color.font};
		.accent_font {
			color: ${theme.color.accent};
		}
	}
`
const WrapTitle = styled.div`
	position: relative;
	margin: 47px 0  0 0;
	color: transparent;
	@media ${theme.media.tablet}{
		margin-top: 30px;
	}

`
const Title = styled.h1`
`
const Description = styled.p`
	margin: 32px 0 23px 0 ;
	line-height: 25px;
	padding-right: 50px;
	@media ${theme.media.tablet}{
		margin: 21px 0 0 0 ;
		line-height: 23px;
		padding-right: 0;
	}
`
const Btn = styled(Button)`
	@media ${theme.media.tablet}{
		display: none
	}

`
const WrapImages = styled.div`
	position: relative;
	flex-grow: 1;
	width: 100%;
	max-width: 457px;
`



const Image = styled.img`
	max-width: 457px; 
	object-fit: cover;
	width: 100%;
	border: 2px dashed ${theme.color.default};
	@media ${theme.media.tablet}{
		max-height: 72vw;
		padding-left: 11px;
		width: 99%;
	}
`
const BackgroundIcon = styled.img`
	max-width: 155px;
	width: 34%;
	position: absolute;
	top: 20%;
	left: -11px;
	z-index: -1;
	@media ${theme.media.tablet}{
		top: 16%;
		left: 3px;
	}
`
const Dots = styled.img`
	position: absolute;
	width: 18%;
	right: 4%;
	top: 58%;
	@media ${theme.media.tablet}{
		width: 17%;
		right: 5%;
		top: 52%;
	}
`
const CurrentWork = styled.div`
	border: 2px solid ${theme.color.default};
	padding: 7px 0;
	display: flex;
	align-items: center;
	max-width: 402px;
	margin: -6px 6px 0 18px; 
	position: relative;
	&::before{
		content: '';
		margin: 0 9px;
		width: 16px;
		height: 16px;
		background-color: ${theme.color.accent};

	}
	@media ${theme.media.mobile}{
		margin: -6px 3px 0; 
		padding: 7px 7px 7px 0;
	}
`
