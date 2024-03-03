import styled from "styled-components";


type propsSectionTitleType = {
  children: string
}


export const SectionTitle = (props: propsSectionTitleType) => {
  return (
    <Title>{props.children}</Title>
  )
}
const Title = styled.h2`

`
