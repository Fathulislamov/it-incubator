import styled from "styled-components"
import { Svg } from "./Svg"

export const Logo = () => {
  return (
    <WrapLogo>
      <Svg iconId={'defaultLogo'} width="16px" />
      <Name>Elias</Name>
    </WrapLogo>
  )
}

const WrapLogo = styled.div`
	display: flex;
	align-items: center;
`
const Name = styled.span`
	margin-left: 7px;
	font-size: 16px;
	font-weight: 700;
`
