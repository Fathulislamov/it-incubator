import styled from "styled-components"
import { BorderDiv } from "./BorderDiv"
import { Svg } from "./Svg"
import { DashedDiv } from "./DachedDiv"

export type contact = {
  iconId: string
  address: string
}

type propsContactType = {
  contacts: contact[]
}

export const Contact = (props: propsContactType) => {
  return (
    <StyledContact>
      <Message>Message me here</Message>
      {
        props.contacts.map((item: contact, index) => {
          return (
            <WrapContactItem key={index}>
              <DashedWrap>
                <Svg iconId={item.iconId} width='30px' />
              </DashedWrap>
              <Address>{item.address}</Address>
            </WrapContactItem>
          )
        }
        )}
    </StyledContact >
  )
}
const Address = styled.span`
	margin-left: 4px;

`

const StyledContact = styled(BorderDiv)`
	max-width: 204px;
	padding: 13px;
	width: 100%;

`
const Message = styled.h3`
	font-size: 16px;
	font-weight: 600;
	line-height: 21px;
	margin-bottom: 14px;

`
const DashedWrap = styled(DashedDiv)`
	display: inline-block;
	padding: 0;

`
const WrapContactItem = styled.div`
	display: flex;
	align-items: center;
	&+& {
		margin-top: 1px;
	}

`
