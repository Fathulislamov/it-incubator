import styled from "styled-components"
import { theme } from "../../theme"
import { Container } from "../../components/Container"
import icon from '../../assets/quote.svg'

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
const StyleQuote = styled.section`
	overflow: hidden;
	padding: 20px;
	margin-top: 90px;
`
const WrapQuote = styled.div`
	display: flex;
	justify-content: end;
	flex-wrap: wrap;
	max-width: 712px;
	margin: 0 auto;

`
const Citation = styled.h2`
	border: 1px solid ${theme.color.default};
	padding: 31px;
	font-weight: 500;
	position: relative;
	&::before{
		content: url(${icon});
		width: 42px;
		position: absolute;
		background-color: ${theme.color.background};
		top: -15px;
		left: 9px;
		display: flex;
		justify-content: center;
	}
	&::after{
		content: '';
		width: 81px;
		height: 91px;
		position: absolute;
		top: 11px;
		right: -330px;
		border: 1px solid ${theme.color.default};
		border-right: 1px solid ${theme.color.background};
		overflow: clip;
	}
`
const Author = styled.span`
	border: 1px solid ${theme.color.default};
	padding: 16px;
	font-size: 24px;
	font-weight: 400;
	margin-top: -1px;
	position: relative;
	&::before{
		content: url(${icon});
		width: 42px;
		position: absolute;
		background-color: ${theme.color.background};
		top: -15px;
		right: 16px;
		display: flex;
		justify-content: center;
	}
`
