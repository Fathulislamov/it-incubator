import styled from "styled-components"
import { Button } from "./Button"
import { BorderDiv } from "./BorderDiv"

type buttonType = {
  text: string
  colored: boolean
}

type propsCardsType = {
  title: string
  img: string
  tehnologies: string
  description: string
  buttons: buttonType[]
}

export const Card = (props: propsCardsType) => {
  return (
    <StyleCard>
      <Preview src={props.img} />
      <Tehnologies>{props.tehnologies}</Tehnologies>
      <WrapText>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
        {props.buttons.map((item: buttonType) => {
          return <Button colored={item.colored}>{item.text}</Button>
        })}
      </WrapText>
    </StyleCard>
  )

}
const StyleCard = styled(BorderDiv)`
`
const Preview = styled.img`

`
const Description = styled.p`
	margin: 15px 0;
`
const WrapText = styled.div`
	padding: 16px;
`
const Title = styled.h3`
	font-size: 24px;
	font-weight: 500;
	line-height: 31px;
`
const Tehnologies = styled(BorderDiv)`
	margin-top: -15px;
	padding: 9px 9px 2px;
	font-size: 16px;
	font-weight: 400;
	line-height: 2;
`
