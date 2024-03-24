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
	margin-top: 89px;

`
const WrapSkills = styled.div`
	display: flex;

`
const Figures = styled.div`
	max-width: 349px;
	width: 45%;
	position: relative;

	& svg:first-child{
		position: absolute;
		top: 179px;
		left: 14%;
	}	

	& svg:nth-child(2){
		position: absolute;
		top: 51px;
		left: 11%;
	}	

	& svg:nth-child(3){
		position: absolute;
		top: 156px;
		right: 16%;
		@media ${theme.media.desktop}{
			display: none;
		}
	}	

	&::before,
	&::after{
		content: '';
		position: absolute;
		border: 1px solid ${theme.color.default};
		@media ${theme.media.desktop}{
			display: none;
		}
	}
	
	&::before{
		width: 10vw;
		max-width: 85px;
		height: 10vw;
		max-height: 85px;
		top: 12px;
		right: -23px;
	}

	&::after{
		width: 5vw;
		max-width: 50px;
		height: 5vw;
		max-height: 50px;
		top: 205px;
		right: -59px;
	}
	
	@media ${theme.media.tablet}{
		display: none;
	}
`
const WrapGroupSkills = styled.div`
	margin-top: 44px;
	display: flex;
	justify-content: end;
	align-items: start;
	flex-wrap: wrap;
	gap: 16px;
	flex-grow: 1;

	& div {
		max-width: 178px;
	}

	& div:nth-child(3),
	& div:nth-child(5) {
		max-width: 196px;
		padding: 0;
		@media ${theme.media.desktop}{
			max-width: auto;
		}
	}

	& div:nth-child(4) {
		margin-top: -28px;
		@media ${theme.media.desktop}{
			margin: 0;
		}
	}
	@media ${theme.media.desktop}{
		align-items: stretch;
		justify-content: center;
		& > div {
			max-width: auto;
			flex-grow: 1;
	};
		}

`
