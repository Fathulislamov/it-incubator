type ItemType = {
  title: string
  value: any
}



type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
  onChange: () => void
  items: ItemType[]
  onClick: (value: any) => void
}
export const Accordion = (props: AccordionPropsType) => {
  console.log("Accordion rendering")
  return (
    <div>

      <AccordionTitle title={props.titleValue} onChange={props.onChange} collapsed={props.collapsed} />
      {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
  )
}

type AccordionTitlePropsType = {
  title: string
  onChange: () => void
  collapsed: boolean
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
  console.log("AccordionTitle rendering")
  return (
    <h3 onClick={props.onChange}> --{props.title}-- </h3>

  )
}

type AccordionBodyPropsType = {
  items: ItemType[]
  onClick: (value: any) => void
}

const AccordionBody = (props: AccordionBodyPropsType) => {
  console.log("AccordionBody rendering")
  return (
    <ul>
      {props.items.map((i, index) => <li onClick={() => { props.onClick(i.value) }} key={index}>{i.title}</li>)}
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
