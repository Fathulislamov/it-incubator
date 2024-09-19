import { Button } from "../Button/Button"
import { ValueItems } from "./ValueItems/ValueItems"
import './SettingsStyle.css'
import { ChangeEvent } from "react"
import { ValuesType } from "../../App"
import { useDispatch, useSelector } from "react-redux"
import { ChangeCountAC, ChangeErrorAC, ChangeIsNewDataAC, changeMaxValueAC, ChangeStartValueAC } from "../../state/reducer"


export const Settings = () => {

  const maxValue = useSelector<ValuesType, number>(state => state.maxValue)
  const startValue = useSelector<ValuesType, number>(state => state.startValue)
  const error = useSelector<ValuesType, string>(state => state.error)
  const isNewData = useSelector<ValuesType, boolean>(state => state.isNewData)

  const dispatch = useDispatch()

  const validation = (type: 'start' | 'max', value: number) => {
    let validationError = '';
    switch (type) {
      case 'start': {
        if (value < 0 || value > maxValue) {
          validationError = 'Incorrect value!';
        }
        break;
      }
      case 'max': {
        if (value <= 0 || value < startValue) {
          validationError = 'Incorrect value!';
        }
        break;
      }
    }
    dispatch(ChangeErrorAC(validationError))
    return validationError;
  }

  const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.currentTarget.value)
    const isValid = !validation('max', newValue)
    isValid && dispatch(changeMaxValueAC(newValue))
      && dispatch(ChangeIsNewDataAC(true))
  }

  const onChangeStart = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.currentTarget.value)
    const isValid = !validation('start', newValue)
    if (isValid || newValue === -1) {
      dispatch(ChangeStartValueAC(newValue))
      dispatch(ChangeIsNewDataAC(true))
    }
  }
  const setNewValues = () => {
    dispatch(ChangeCountAC(startValue))
    dispatch(ChangeIsNewDataAC(false))
  }

  return (
    <div className="settings bordered">
      <div className="values bordered">
        <ValueItems id={'max'} title={'max value:'} value={maxValue} onChange={onChangeMax} error={error} />
        <ValueItems id={'start'} title={'start value:'} value={startValue} onChange={onChangeStart} error={error} />
      </div>
      <div className="set bordered">
        <Button
          onClickHandler={setNewValues}
          disabled={!isNewData || !!error}
        >
          set
        </Button>
      </div>
    </div >
  )
}
