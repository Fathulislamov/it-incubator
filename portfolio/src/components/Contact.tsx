import styled from "styled-components"
import { BorderDiv } from "./BorderDiv"

export type contact = {
  icon: string
  address: string
}

type propsContactType = {
  contacts: contact[]
}
export const Contact = (props: propsContactType) => {
  return (
    <StyledContact>
      {
        props.contacts.map((item: contact) => {
          return <>
            <Icon src={item.icon} />
            <Address>{item.address}</Address>
          </>
        }
        )}
    </StyledContact>
  )
}
const Address = styled.span`

`
const Icon = styled.img`

`

const StyledContact = styled(BorderDiv)`

`
