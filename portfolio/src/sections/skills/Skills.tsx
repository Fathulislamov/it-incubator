import styled from "styled-components"
import { SectionTitle } from "../../components/SectionTitle"
import { GroupSkill } from "./GroupSkill"
import { Container } from "../../components/Container"
import { Icon } from "../../components/Icon"


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
        <SectionTitle firstSymbol='#' maxLineWidth='239px'>skills</SectionTitle>
        <WrapSkills>
          <Figures>
            <Icon iconId="outlineLogo" width="113px" />
            <Icon iconId="dots" width="63px" />
            <Icon iconId="dots" width="63px" />
          </Figures>
          <WrapGroupSkills>
            {skills.map((item) => {
              return <GroupSkill
                title={item.title}
                skills={item.skills}
              />
            })
            }
          </WrapGroupSkills>
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
	max-width: 349px;
	width: 100%;

	outline: 2px solid red;
`
const WrapGroupSkills = styled.div`
	outline: 2px solid green;

	&:first-child {
		max-width: 178px;
		width: 100%;
		background-color: red;
	}
`
