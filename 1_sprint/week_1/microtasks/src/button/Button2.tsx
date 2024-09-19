import { Button } from "./components/Button"

export const Button2 = (props: {}) => {
  const Button1foo = (subscriber: string, age: number, addres: string) => {
    console.log(subscriber, age, addres)
  }
  const Button2foo = (subscriber: string) => {
    console.log(subscriber)
  }
  const Button3foo = () => {
    console.log('Im stupid button')
  }
  return (

    <div>
      <Button name={'MyYotubeChannel-1'} callBack={() => Button1foo('Im Vasya', 21, 'live in Minsk')} />
      <Button name={'MyYotubeChannel-2'} callBack={() => Button2foo('Im Ivan')} />
      <Button name={'MyYotubeChannel-3'} callBack={Button3foo} />
    </div>
  )
}
