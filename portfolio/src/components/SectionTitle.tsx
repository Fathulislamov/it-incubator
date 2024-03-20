import styled from "styled-components";
import { theme } from "../theme";


type SectionTitlePropsType = {
  firstSymbol: '#' | '/'
  children: string
  maxLineWidth?: string
}



export const SectionTitle = (props: SectionTitlePropsType) => {
  if (props.maxLineWidth) {
    return <TitleLine maxLineWidth={props.maxLineWidth}><span>{props.firstSymbol}</span>{props.children}</TitleLine>
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
    margin-left: 20px;
    width: 64%;
    max-width: ${props => props.maxLineWidth};
    height: 2px;
    background: ${theme.color.accent };
    margin-top: 0.7em;
  }
`
