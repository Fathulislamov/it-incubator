import styled from "styled-components"
import { SectionTitle } from "../../components/SectionTitle"
import { GroupSkill } from "./GroupSkill"
import { Container } from "../../components/Container"
import { Svg } from "../../components/Svg"
import { theme } from "../../theme"


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
    <StyleSkills>
      <Container>
        <SectionTitle firstSymbol='#' maxLineWidth='239px'>skills</SectionTitle>
        <WrapSkills>
          <Figures>
            <Svg iconId="outlineLogo" width="118px" />
            <Svg iconId="dots" width="63px" />
            <Svg iconId="dots" width="63px" />
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
	position: relative;

	& svg:first-child{
		position: absolute;
		top: 179px;
		right: 186px;
	}	

	& svg:nth-child(2){
		position: absolute;
		top: 51px;
		right: 253px;
	}	

	& svg:nth-child(3){
		position: absolute;
		top: 156px;
		right: 76px;
	}	

	&::before{
		content: '';
		position: absolute;
		width: 86px;
		height: 86px;
		border: 1px solid ${theme.color.default};
		top: 12px;
		right: 1px;
	}

	&::after{
		content: '';
		position: absolute;
		width: 52px;
		height: 52px;
		border: 1px solid ${theme.color.default};
		top: 205px;
		right: -35px;
	}
`
const WrapGroupSkills = styled.div`
	margin-top: 44px;
	display: flex;
	justify-content: end;
	align-items: start;
	flex-wrap: wrap;
	gap: 16px;

	& div {
		max-width: 178px;
	}

	& div:nth-child(3),
	& div:nth-child(5) {
		max-width: 196px;
		padding: 0;
	}

	& div:nth-child(4) {
		margin-top: -28px;
	}

`
