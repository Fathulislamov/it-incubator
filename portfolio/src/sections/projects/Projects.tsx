import styled from 'styled-components'
import { Cards } from './Cards'
import imgProject1 from '../../assets/project1.jpeg'
import imgProject2 from '../../assets/project2.jpeg'
import imgProject3 from '../../assets/project3.jpeg'
import { SectionTitle } from '../../components/SectionTitle'


export const Projects = () => {
  return (
    <StyleProjects>
      <SectionTitle>#projects</SectionTitle>
      <ViewLink>View all </ViewLink>
      <Cards
        title='ChertNodes'
        img={imgProject1}
        tehnologies='HTML SCSS Python Flask'
        description='Minecraft servers hosting'
      />
      <Cards
        title='ProtectX'
        img={imgProject2}
        tehnologies='React Express Discord.js Node.js HTML SCSS Python Flask'
        description='Discord anti-crash bot'
      />
      <Cards
        title='Kahoot Answers Viewer'
        img={imgProject3}
        tehnologies='css Express Node.js'
        description='Get answers to your kahoot quiz'
      />

    </StyleProjects>
  )
}
const StyleProjects = styled.section`
	display: flex;

`
const ViewLink = styled.a`

`
