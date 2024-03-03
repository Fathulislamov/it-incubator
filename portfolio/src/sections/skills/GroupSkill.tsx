import styled from "styled-components"

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
const StyleGroup = styled.div`

`
const Title = styled.h3`

`
const SkillsList = styled.p`

`
