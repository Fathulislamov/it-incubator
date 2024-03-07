import styled from "styled-components"

export const BorderDiv = (props: any ) => {
	return (
			<StyleDiv>{props.children}</StyleDiv>
	)
}

const StyleDiv= styled.div`
	border: 1px solid rgb(171, 178, 191);
`
