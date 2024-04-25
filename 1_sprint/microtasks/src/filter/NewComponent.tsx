import { Button } from "./Button"
import { FilterType } from "./Filter"

type moneyType = {
  banknote: string
  nominal: number
  number: string
}

type NewComponentType = {
  currentMoney: Array<moneyType>
  callBack: (props: FilterType) => void

}

export const NewComponent = (props: NewComponentType) => {
  const currentMoney = props.currentMoney
  const callBack = props.callBack
  return (
    <div>
      <ul>
        {currentMoney.map((objFromMoneyArr, index: number) => {
          return (
            <li key={index}>
              <span >{objFromMoneyArr.banknote}</span>
              <span>{objFromMoneyArr.nominal}</span>
              <span>{objFromMoneyArr.number}</span>
            </li>
          )
        })}
      </ul>
			<Button name={'all'} callBack={()=>callBack('all')}/>
			<Button name={'rubles'} callBack={()=>callBack('ruble')}/>
			<Button name={'dollars'} callBack={()=>callBack('dollar')}/>
    </div>
  )
}
