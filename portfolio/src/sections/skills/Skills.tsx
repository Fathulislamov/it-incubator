import styled from "styled-components"
import { SectionTitle } from "../../components/SectionTitle"
import { GroupSkill } from "./GroupSkill"
import { Container } from "../../components/Container"

const skills = [
  {
    title: 'Languages',
    skills: 'TypeScript Lua Python JavaScript'
  },
  {
    title: 'Database',
    skills: 'SQLite PostgreSQL Mongo'
  },
  {
    title: 'Tools',
    skills: 'VSCode Neovim Figma XFCE Arch Git Font Awesome'
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
    <StyleSkills>
      <Container>
        <WrapSkills>
          <SectionTitle>Skills</SectionTitle>
          <Figures></Figures>
          {skills.map((item) => {
            return <GroupSkill
              title={item.title}
              skills={item.skills}
            />
          })
          }
        </WrapSkills>
      </Container>
    </StyleSkills>
  )
}
const StyleSkills = styled.section`

`
const WrapSkills = styled.div`
	display: flex;

`
const Figures = styled.div`

`
