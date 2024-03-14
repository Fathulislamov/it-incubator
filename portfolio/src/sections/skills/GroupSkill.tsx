import styled from "styled-components"
import { BorderDiv } from "../../components/BorderDiv"
import { theme } from "../../theme"

type propsGroupSkillType = {

  title: string
  skills: string
}

export const GroupSkill = (props: propsGroupSkillType) => {
  return (
    <StyleGroup>
      <Title>{props.title}</Title>
      <SkillsList>{props.skills}</SkillsList>
    </StyleGroup>
  )
}
const StyleGroup = styled(BorderDiv)`

`
const Title = styled.h3`
	border-bottom: 1px solid ${theme.color.default };
	padding: 8px;
	font-size: 16px;
	font-weight: 600;
`
const SkillsList = styled.p`
	padding: 6px;
	color: ${theme.color.default};
	font-size: 16px;
	font-weight: 400;
	line-height: 27px;

`
