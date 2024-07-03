import { useReducer, useState } from "react"
import { reducer } from "./reducer"

type AccordionPropsType = {
  titleValue: string
}

export const UncontrolledAccordion = (props: AccordionPropsType) => {
  console.log("Accordion rendering")
  const [state, dispatch] = useReducer(reducer, { collapsed: false })
  return (
    <div>

      {/*<AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)} /> */}
      <AccordionTitle title={props.titleValue} onClick={() => dispatch({ type: "TOGGLE-COLLAPSED" })} />

      {state.collapsed && <AccordionBody />}
    </div>
  )
}

type AccordionTitlePropsType = {
  title: string
  onClick: () => void
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
  console.log("AccordionTitle rendering")
  return (
    <h3 onClick={() => { props.onClick() }}> --{props.title}-- </h3>
  )
}


const AccordionBody = () => {
  console.log("AccordionBody rendering")
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}
type PageTitlePropsType = {
  title: string
}

export const PageTitle = (props: PageTitlePropsType) => {
  console.log("PageTitle rendering")
  return <h1>{props.title}</h1>
}
