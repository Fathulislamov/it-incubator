import styled from "styled-components"
import { SectionTitle } from "../../components/SectionTitle"
import { GroupSkill } from "./GroupSkill"

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
      <SectionTitle>Skills</SectionTitle>
      <Figures></Figures>
      { skills.map((item) => {
        return <GroupSkill
          title={item.title}
          skills={item.skills}
        />
				})
			}
    </StyleSkills>
  )
}
const StyleSkills = styled.section`

`
const Figures = styled.div`

`
const WrapSkills = styled.div`

`
