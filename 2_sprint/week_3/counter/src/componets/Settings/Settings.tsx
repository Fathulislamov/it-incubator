import { Button } from "../Button/Button"
import { ValueItems } from "./ValueItems/ValueItems"
import './SettingsStyle.css'
import { ChangeEvent, useState } from "react"
import { SetValuesType } from "../../App"

export type SettingsPropsType = {
  setValue: (value: SetValuesType) => void
  currentValue: SetValuesType
	error: string
	setError: (value: string) => void
}

export const Settings = ({ setValue, currentValue, error, setError }: SettingsPropsType) => {
  const [localValue, setValueLocal] = useState<SetValuesType>(currentValue)


  const validation = (type: 'start' | 'max', value: number) => {
    switch (type) {
      case 'start': {
        if (value < 0 || value > localValue.maxValue) {
          setError('Incorrect value!')
        } else setError('')
        break;
      }
      case 'max': {
        if (value <= 0 || value < localValue.startValue) {
          setError('Incorrect value!')
        } else setError('')
        break;
      }
    }
  }

  const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.currentTarget.value)
    validation('max', newValue)
    !error && setValueLocal({ ...localValue, maxValue: newValue })
  }

  const onChangeStart = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.currentTarget.value)
    validation('start', newValue)
    !error && setValueLocal({ ...localValue, startValue: e.currentTarget.value ? parseInt(e.currentTarget.value) : 0 })
  }

  return (
    <div className="settings bordered">
      <div className="values bordered">
        <ValueItems id={'max'} title={'max value:'} value={localValue.maxValue} onChange={onChangeMax} />
        <ValueItems id={'start'} title={'start value:'} value={localValue.startValue} onChange={onChangeStart} />
      </div>
      <div className="set bordered">
        <Button onClickHandler={() => { setValue(localValue) }} disabled={!!error}>set</Button>
      </div>
    </div >
  )
}
