import styled from "styled-components"
import { Contact, contact } from "../../components/Contact";


const contacts: contact[] = [
  {
    icon: 'jlkjj',
    address: 'jlkjl'
  }
]

export const Contacts = () => {
  return (
    <StyleContacts>
      <Description>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</Description>
      <Contact contacts={contacts}></Contact>
    </StyleContacts>

  );
};


const StyleContacts = styled.section`

`
const Description = styled.p`

`
