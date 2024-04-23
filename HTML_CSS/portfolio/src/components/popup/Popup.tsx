import { Button } from '../Button'
import { Input } from '../Input'
import { S } from './Popup_Styles'

export const Popup = (props: { closeBtn: () => void, popupIsOpen: boolean }) => {

  const closePopup = () => {
    props.closeBtn()
  }

  return (
    <>
      <S.Overlay />
      <S.Popup popupIsOpen={props.popupIsOpen}>
        <S.Form>
          <S.WrapInputs>
            <Input placeholder='Name' required />
            <Input placeholder='Email' required />
          </S.WrapInputs>
          <Input placeholder='Title' />
          <S.Message placeholder='Message' required />
          <S.WrapButtons>
            <Button colored type='submit'>Send</Button>
            <Button onClick={closePopup}>Close</Button>
          </S.WrapButtons>
        </S.Form>
      </S.Popup>
    </>
  )
}



