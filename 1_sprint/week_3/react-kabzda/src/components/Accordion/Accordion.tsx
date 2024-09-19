
type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
}
export const Accordion = (props: AccordionPropsType) => {
  console.log("Accordion rendering")
  return (
    <div>

      <AccordionTitle title={props.titleValue} />
      {!props.collapsed && <AccordionBody />}
    </div>
  )
}

type AccordionTitlePropsType = {
  title: string
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
  console.log("AccordionTitle rendering")
  return (
    <h3> --{props.title}-- </h3>
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
