import { S } from './Skills_Styles'

type propsGroupSkillType = {

  title: string
  skills: string
}

export const GroupSkill = (props: propsGroupSkillType) => {
  return (
    <S.StyleGroup>
      <S.Title>{props.title}</S.Title>
      <S.SkillsList>{props.skills}</S.SkillsList>
    </S.StyleGroup>
  )
}
