import styled from "styled-components"
import { Contact, contact } from "../../components/Contact";
import { SectionTitle } from "../../components/SectionTitle";
import { Container } from "../../components/Container";

import { Svg } from "../../components/Svg";
import { theme } from "../../theme";

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

export const Contacts = () => {
  return (
    <StyleContacts>
      <Container>
        <SectionTitle firstSymbol='#' maxLineWidth='127px'>contacts</SectionTitle>
        <WrapContent>
          <Svg iconId='dots4' width='105px' />
          <Description>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</Description>
          <Contact contacts={contacts}></Contact>
        </WrapContent>
      </Container>
    </StyleContacts>

  );
};


const StyleContacts = styled.section`
`
const WrapContent = styled.div`
	display: flex;
	margin-top: 47px;
	justify-content: space-between;
	position: relative;
	gap: 20px;
	& > svg{
		position: absolute;
		top: 3px;
		left: -193px;
	}
	@media ${theme.media.mobile}{
		flex-direction: column;
	}
`

const Description = styled.p`
	max-width: 505px;
`

