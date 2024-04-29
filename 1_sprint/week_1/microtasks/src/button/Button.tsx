import { MouseEvent, MouseEventHandler } from 'react';

export const Button = (props: {}) => {
  // const myFirstSublscriber = (event: MouseEvent<HTMLButtonElement>) => {
  //   console.log('Hello Im VASUA!')
  // }
  // const mySecondSublscriber = (event: MouseEvent<HTMLButtonElement>) => {
  //   console.log('Hello Im IVAN!')
  // }
  const onClickHandler = (name: string) => {
    console.log(name)
  }

  return (
    <div>
      {/* <button onClick={(event: MouseEvent<HTMLButtonElement>) => { console.log('Hello') }}>MyYotubeChannel-1</button> */}
      <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler('VASUA')}>MyYotubeChannel-2</button>
      <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler('IVAN')}>MyYotubeChannel-2</button>
    </div>
  )
}
