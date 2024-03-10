import styled from "styled-components"
import { Button } from "./Button"

type propsCardsType = {
  title: string
  img: string
  tehnologies: string
  description: string
}
export const Card = (props: propsCardsType) => {
  return (
    <StyleCard>
      <Preview src={props.img} />
      <Tehnologies>{props.tehnologies}</Tehnologies>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
      <Button>kjlkj l</Button>
    </StyleCard>
  )

}
const StyleCard = styled.div`

`
const Preview = styled.img`

`
const Description = styled.p`

`
const Title = styled.h3`

`
const Tehnologies = styled.p`

`
