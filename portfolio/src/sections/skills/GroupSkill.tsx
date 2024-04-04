import { S } from './Skills_Styles'

type propsGroupSkillType = {

  title: string
  skills: string
}

export const GroupSkill: React.FC<propsGroupSkillType> = (props: propsGroupSkillType) => {
  return (
    <S.Group>
      <S.Title>{props.title}</S.Title>
      <S.SkillsList>{props.skills}</S.SkillsList>
    </S.Group>
  )
}
