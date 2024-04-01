import { Button } from '../Button'
import { Input } from '../Input'
import { S } from './Popup_Styles'

export const Popup = () => {

  //const [popupIsOpen, setpopupIsOpen] = useState(false)
  //const onButtonBtnClick = () => { setmenuIsOpen(!menuIsOpen) }

  return (
    <S.Popup>
      <S.Form>
        <S.WrapInputs>
          <Input placeholder='Name' required />
          <Input placeholder='Email' required />
        </S.WrapInputs>
        <Input placeholder='Title' />
        <S.Message placeholder='Message' required />
        <S.WrapButtons>
          <Button colored type='submit'>Send</Button>
          <Button>Close</Button>
        </S.WrapButtons>
      </S.Form>
    </S.Popup>
  )
}



