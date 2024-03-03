import styled from "styled-components"
import { Button } from "../../components/Button"

type propsCardsType = {
  title: string
  img: string
  tehnologies: string
  description: string
}
export const Cards = (props: propsCardsType) => {
  return (
    <StyleCards>
      <Preview src={props.img} />
      <Tehnologies>{props.tehnologies}</Tehnologies>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
      <Button title="jjlkjl">kjlkj l</Button>
    </StyleCards>
  )

}
const StyleCards = styled.div`

`
const Preview = styled.img`

`
const Description = styled.p`

`
const Title = styled.h3`

`
const Tehnologies = styled.p`

`
