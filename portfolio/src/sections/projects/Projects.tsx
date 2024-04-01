import imgProject1 from '../../assets/project1.jpeg'
import imgProject2 from '../../assets/project2.jpeg'
import imgProject3 from '../../assets/project3.jpeg'
import { SectionTitle } from '../../components/SectionTitle'
import { Card } from '../../components/Card'
import { Container } from '../../components/Container'
import { S } from './Projects_Styles'

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
    <S.StyleProjects>
      <Container>
        <S.WrapProjects>
          <S.WrapTitle>
            <SectionTitle firstSymbol='#' maxLineWidth={'511px'}>projects</SectionTitle>
            <S.ViewLink>View all ~~&gt;</S.ViewLink>
          </S.WrapTitle>
          <S.Cards>
            {projects.map((item, index) => {
              return <Card
                title={item.title}
                img={item.img}
                tehnologies={item.tehnologies}
                description={item.description}
                buttons={item.buttons}
                key={index}
              />
            })}
          </S.Cards>
        </S.WrapProjects>
      </Container>
    </S.StyleProjects>
  )
}
