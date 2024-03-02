import styled from 'styled-components'
import { Cards } from './Cards'

export const Projects = () => {
	return (
			<StyleProjects>
			<Title>#projects</Title>
			<ViewLink>View all</ViewLink>
			<Cards />
			<Cards />
			<Cards />
			</StyleProjects>
	)
}
const StyleProjects = styled.section`

`
const Title = styled.h2`

`
const ViewLink = styled.a`

`
