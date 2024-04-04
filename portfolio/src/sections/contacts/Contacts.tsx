import { Contact, contact } from "../../components/Contact";
import { SectionTitle } from "../../components/SectionTitle";
import { Container } from "../../components/Container";
import { Svg } from "../../components/Svg";
import { S } from './Contact_Styles'

const contacts: contact[] = [
  {
    iconId: 'discord',
    address: '!Elias#3519'
  },
  {
    iconId: 'email',
    address: 'elias@elias.me'
  }
]

export const Contacts: React.FC = () => {
  return (
    <S.StyleContacts>
      <Container>
        <SectionTitle firstSymbol='#' maxLineWidth='127px'>contacts</SectionTitle>
        <S.WrapContent>
          <Svg iconId='dots4' width='105px' />
          <S.Description>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</S.Description>
          <Contact contacts={contacts}></Contact>
        </S.WrapContent>
      </Container>
    </S.StyleContacts>
  );
};


