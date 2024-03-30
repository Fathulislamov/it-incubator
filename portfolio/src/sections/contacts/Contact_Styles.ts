import styled from "styled-components"
import { theme } from "../../theme"

const StyleContacts = styled.section`
`

const WrapContent = styled.div`
	display: flex;
	margin-top: 47px;
	justify-content: space-between;
	position: relative;
	gap: 20px;

	& > svg{
		position: absolute;
		top: 3px;
		left: -193px;
	}

	@media ${theme.media.mobile}{
		flex-direction: column;
	}
`

const Description = styled.p`
	max-width: 505px;
`

export const S = {
  StyleContacts,
  WrapContent,
  Description
}
