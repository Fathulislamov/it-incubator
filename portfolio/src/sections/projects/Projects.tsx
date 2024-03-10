import styled from 'styled-components'
import imgProject1 from '../../assets/project1.jpeg'
import imgProject2 from '../../assets/project2.jpeg'
import imgProject3 from '../../assets/project3.jpeg'
import { SectionTitle } from '../../components/SectionTitle'
import { Card } from '../../components/Cards'
import { Container } from '../../components/Container'

const projects = [
  {
    title: 'ChertNodes',
    img: imgProject1,
    tehnologies: 'HTML SCSS Python Flask',
    description: 'Minecraft servers hosting',
  },
  {
    title: 'ProtectX',
    img: imgProject2,
    tehnologies: 'React Express Discord.js Node.js HTML SCSS Python Flask',
    description: 'Discord anti-crash bot',
  },
  {
    title: 'Kahoot Answers Viewer',
    img: imgProject3,
    tehnologies: 'css Express Node.js',
    description: 'Get answers to your kahoot quiz',
  },
]

export const Projects = () => {
  return (
    <StyleProjects>
      <Container>
        <WrapProjects>
          <WrapTitle>
            <SectionTitle firstSymbol='#' maxLineWidth={'511px'}>projects</SectionTitle>
            <ViewLink>View all </ViewLink>
          </WrapTitle>
          <Cards>
            {/*projects.map((item) => {
              return <Card
                title={item.title}
                img={item.img}
                tehnologies={item.tehnologies}
                description={item.description}
              />
            })
            */}
          </Cards>
        </WrapProjects>
      </Container>

    </StyleProjects>
  )
}
const StyleProjects = styled.section`
`
const ViewLink = styled.a`
`

const WrapProjects = styled.div`
	display: flex;
	flex-direction: column;
`
const WrapTitle = styled.div`
	display: flex;
	justify-content: space-between;

`
const Cards = styled.div`
	display: flex;
`
