import { Button } from "../Button/Button"
import { ValueItems } from "./ValueItems/ValueItems"
import './SettingsStyle.css'
import { ChangeEvent, useState } from "react"

export type SetValuesType = {
  maxValue: number
  startValue: number
}

export const Settings = (props: {}) => {
  const [value, setValue] = useState<SetValuesType>({ maxValue: 5, startValue: 0 })

  const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, maxValue: e.currentTarget.value ? parseInt(e.currentTarget.value) : 0 })
  }

  const onChangeStart = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, startValue: e.currentTarget.value ? parseInt(e.currentTarget.value) : 0 })
  }

  return (
    <div className="settings bordered">
      <div className="values bordered">
        <ValueItems id={'max'} title={'max value'} value={value.maxValue} onChange={onChangeMax} />
        <ValueItems id={'start'} title={'start value'} value={value.startValue} onChange={onChangeStart} />
      </div>
      <div className="set bordered">
        <Button onClickHandler={() => { }}>Set</Button>
      </div>
    </div >
  )
}
