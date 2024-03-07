import styled from "styled-components"
import { BorderDiv } from "../../components/BorderDiv"

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

`
const SkillsList = styled.p`

`
