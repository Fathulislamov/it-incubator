import { ClockViewPropsType } from './Clock'

export const get2digitsSring = (num: number) => num < 10 ? "0" + num : num

export const DigitalClockView: React.FC<ClockViewPropsType> = ({ date }) => {

  return <>
    <span>{get2digitsSring(date.getHours())}</span>
    :
    <span>{get2digitsSring(date.getMinutes())}</span>
    :
    <span>{get2digitsSring(date.getSeconds())}</span>
  </>

}
