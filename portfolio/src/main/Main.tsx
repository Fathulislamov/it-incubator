import img from '../assets/MainImage.png'
import dots from '../assets/Dots.svg'
import { Container } from "../components/Container"
import logo from '../assets/backgroundLogo.png'
import Typewriter from 'typewriter-effect';
import { S } from './Main_Styles'
import { useState } from 'react';
import { Popup } from '../components/popup/Popup';


export const Main = () => {

  const [popupIsOpen, setpopupIsOpen] = useState(false)
  const onButtonBtnClick = () => { setpopupIsOpen(!popupIsOpen) }

  return (
    <S.StyleMain>
      <Container>
        <S.WrapMain>
          <S.WrapContent>
            <S.WrapTitle>
              <S.Title>Elias is a web designer and front-end developer</S.Title>
              <Typewriter
                options={{
                  strings: [`Elias is a <span class="accent_font">web designer</span> and <span class="accent_font">front-end developer</span>`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </S.WrapTitle>
            <S.Description>He crafts responsive websites where technologies meet creativity</S.Description>
            <S.Btn colored onClick={onButtonBtnClick}>Contact me!!</S.Btn>
            {popupIsOpen ? <Popup closeBtn={onButtonBtnClick} popupIsOpen={popupIsOpen}/> : ''}
          </S.WrapContent>
          <S.WrapImages>
            <S.BackgroundIcon src={logo} />
            <S.Dots src={dots} />
            <S.Image src={img} />
            <S.CurrentWork><span>Currently working on Portfolio</span></S.CurrentWork>
          </S.WrapImages>
        </S.WrapMain>
      </Container>
    </S.StyleMain>
  )
}

