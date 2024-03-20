import styled from 'styled-components'
import imgProject1 from '../../assets/project1.jpeg'
import imgProject2 from '../../assets/project2.jpeg'
import imgProject3 from '../../assets/project3.jpeg'
import { SectionTitle } from '../../components/SectionTitle'
import { Card } from '../../components/Card'
import { Container } from '../../components/Container'
import { theme } from '../../theme'

const projects = [
  {
    title: 'ChertNodes',
    img: imgProject1,
    tehnologies: 'HTML SCSS Python Flask',
    description: 'Minecraft servers hosting',
    buttons: [
      {
        text: 'Live <~>',
        colored: true
      },
      {
        text: 'Cached >=',
        colored: false
      }
    ]
  },
  {
    title: 'ProtectX',
    img: imgProject2,
    tehnologies: 'React Express Discord.js Node.js HTML SCSS Python Flask',
    description: 'Discord anti-crash bot',
    buttons: [
      {
        text: 'Live <~>',
        colored: true
      },
    ]
  },
  {
    title: 'Kahoot Answers Viewer',
    img: imgProject3,
    tehnologies: 'CSS Express Node.js',
    description: 'Get answers to your kahoot quiz',
    buttons: [
      {
        text: 'Live <~>',
        colored: true
      },
    ]
  },
]

export const Projects = () => {
  return (
    <StyleProjects>
      <Container>
        <WrapProjects>
          <WrapTitle>
            <SectionTitle firstSymbol='#' maxLineWidth={'511px'}>projects</SectionTitle>
            <ViewLink>View all ~~&gt;</ViewLink>
          </WrapTitle>
          <Cards>
            {projects.map((item) => {
              return <Card
                title={item.title}
                img={item.img}
                tehnologies={item.tehnologies}
                description={item.description}
								buttons={item.buttons}
              />
            })}
          </Cards>
        </WrapProjects>
      </Container>

    </StyleProjects>
  )
}
const StyleProjects = styled.section`
	margin-top: 50px;
	overflow: hidden;
`
const ViewLink = styled.a`
	text-align: center;
	white-space: nowrap;
	margin-left: 20px;
`

const WrapProjects = styled.div`
	position: relative;
	&::after{
		content: '';
		width: 88px;
		height: 153px;
		position: absolute;
		top: 270px;
		right: -193px;
		border: 1px solid ${theme.color.default};
		border-right: 1px solid ${theme.color.background};
		overflow: clip;
	}
`
const WrapTitle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 49px; 

`
const Cards = styled.div`
	display: flex;
	gap: 13px;
	justify-content: center;
	align-items: flex-start;
	flex-wrap: wrap;
`
