import styled from "styled-components";
import { theme } from "../theme";


type SectionTitlePropsType = {
  firstSymbol: '#' | '/'
  children: string
  width?: string
  maxLineWidth?: string
}



export const SectionTitle = (props: SectionTitlePropsType) => {
  if (props.maxLineWidth || props.width) {
    return <TitleLine width={props.width}
      maxLineWidth={props.maxLineWidth}>
      <span>{props.firstSymbol}</span>{props.children}
    </TitleLine>
  } else
    return <Title><span>{props.firstSymbol}</span>{props.children}</Title>
}

const Title = styled.h2<TitlePropsType>`
  display: flex;
  width: 80%;
	span{
    color: ${theme.color.accent}
  }

  `
type TitlePropsType = {
  width?: string
  maxLineWidth?: string
}

const TitleLine = styled.h2<TitlePropsType>`
  display: flex;
  width: 80%;
	span{
    color: ${theme.color.accent}
  }
	&::after {
    display: inline - block;
    content: "";
    margin-left: 17px;
		width: ${props => props.width || '64%'};
		${props => props.maxLineWidth ? `max-width: ${props.maxLineWidth};` : ''}
    height: 1px;
    background: ${theme.color.accent};
    margin-top: 0.7em;
		@media ${theme.media.tablet}{

		width: 50%;
		}
  }
`
