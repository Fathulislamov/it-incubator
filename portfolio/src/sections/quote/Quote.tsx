import { S } from './Quote_Styles'
import { Container } from "../../components/Container"

export const Quote: React.FC = () => {
  return (
    <S.Quote>
      <Container>
        <S.WrapQuote>
          <S.Citation>With great power comes great electricity bill</S.Citation>
          <S.Author>- Dr. Who</S.Author>
        </S.WrapQuote>
      </Container>
    </S.Quote>
  )
}

