import { SectionTitle } from "../../components/SectionTitle"
import { GroupSkill } from "./GroupSkill"
import { Container } from "../../components/Container"
import { Svg } from "../../components/Svg"
import { S } from './Skills_Styles'

const skills = [
  {
    title: 'Languages',
    skills: 'TypeScript Lua Python JavaScript'
  },
  {
    title: 'Databases',
    skills: 'SQLite PostgreSQL Mongo'
  },
  {
    title: 'Tools',
    skills: 'VSCode Neovim Linux Figma XFCE Arch Git Font Awesome'
  },
  {
    title: 'Other',
    skills: 'HTML CSS EJS SCSS REST Jinia',
  },
  {
    title: 'Frameworks',
    skills: 'React Vue Disnake Discord.js Flask Express.js'
  }

]
export const Skills = () => {
  return (
    <S.StyleSkills>
      <Container>
        <SectionTitle firstSymbol='#' maxLineWidth='239px'>skills</SectionTitle>
        <S.WrapSkills>
          <S.Figures>
            <Svg iconId="outlineLogo" width="118px" />
            <Svg iconId="dots" width="63px" />
            <Svg iconId="dots" width="63px" />
          </S.Figures>
          <S.WrapGroupSkills>
            {skills.map((item, index) => {
              return <GroupSkill
                title={item.title}
                skills={item.skills}
                key={index}
              />
            })
            }
          </S.WrapGroupSkills>
        </S.WrapSkills>
      </Container>
    </S.StyleSkills>
  )
}
