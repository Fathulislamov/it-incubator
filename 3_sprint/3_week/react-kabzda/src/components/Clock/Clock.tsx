import React, { useEffect, useState } from 'react'

const get2digitsSring = (num: number) => num < 10 ? "0" + num : num

type PropsType = {}

export const Clock: React.FC<PropsType> = (props) => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const intervalID = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => {
      clearInterval(intervalID)
    }
  }, [])


  return (
    <div>
      <span>{get2digitsSring(date.getHours())}</span>
      :
      <span>{get2digitsSring(date.getMinutes())}</span>
      :
      <span>{get2digitsSring(date.getSeconds())}</span>

    </div>
  )
}
