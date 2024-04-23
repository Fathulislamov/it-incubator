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
        {props.buttons.map((item: buttonType, index) => {
          return <Button colored={item.colored} key={index}>{item.text}</Button>
        })}
      </WrapText>
    </StyleCard>
  )

}
const StyleCard = styled(BorderDiv)`
	max-width: 331px;
`
const Preview = styled.img`
	width: 100%;

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
	margin: -15px -1px 0;
	padding: 9px 9px 2px;
	font-size: 16px;
	font-weight: 400;
	line-height: 2;
`
