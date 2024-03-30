import styled from "styled-components"
import { theme } from "../../theme"
import { Container } from "../../components/Container"

export const Quote = () => {
  return (
    <StyleQuote>
      <Container>
        <WrapQuote>
          <Citation>With great power comes great electricity bill</Citation>
          <Author>- Dr. Who</Author>
        </WrapQuote>
      </Container>
    </StyleQuote>
  )

}

