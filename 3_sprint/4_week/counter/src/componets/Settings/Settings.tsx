import { Button } from "../Button/Button"
import { ValueItems } from "./ValueItems/ValueItems"
import './SettingsStyle.css'
import { ChangeEvent } from "react"
import { ValuesType } from "../../App"

export type SettingsPropsType = {
  onChangeValue: (value: ValuesType) => void
  setNewDataHandler: () => void
  currentValue: ValuesType
  error: string
  setError: (value: string) => void
  isNewData: boolean
}

export const Settings = ({ setNewDataHandler, onChangeValue, currentValue, error, setError, isNewData }: SettingsPropsType) => {

  const validation = (type: 'start' | 'max', value: number) => {
    let validationError = '';
    switch (type) {
      case 'start': {
        if (value < 0 || value > currentValue.maxValue) {
          validationError = 'Incorrect value!';
        }
        break;
      }
      case 'max': {
        if (value <= 0 || value < currentValue.startValue) {

          validationError = 'Incorrect value!';
        }
        break;
      }
    }
    setError(validationError)
    return validationError;
  }

  const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.currentTarget.value)
    const isValid = !validation('max', newValue)
    isValid && onChangeValue({ ...currentValue, maxValue: newValue })
  }

  const onChangeStart = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.currentTarget.value)
    const isValid = !validation('start', newValue)
    if (isValid || newValue === -1) onChangeValue({ ...currentValue, startValue: e.currentTarget.value ? parseInt(e.currentTarget.value) : 0 })
  }

  return (
    <div className="settings bordered">
      <div className="values bordered">
        <ValueItems id={'max'} title={'max value:'} value={currentValue.maxValue} onChange={onChangeMax} error={error} />
        <ValueItems id={'start'} title={'start value:'} value={currentValue.startValue} onChange={onChangeStart} error={error} />
      </div>
      <div className="set bordered">
        <Button onClickHandler={setNewDataHandler} disabled={!isNewData || !!error}>set</Button>
      </div>
    </div >
  )
}
