import { useEffect, useState } from "react"

export default {
  title: 'useEffect demo'
}

export const SimpleExample = () => {
  const [fake, setFake] = useState(1)
  const [counter, setCounter] = useState(1)

  console.log('SimpleExample')

  useEffect(() => {
    console.log('useEffect every render')
    document.title = counter.toString()
  })

  useEffect(() => {
    console.log('useEffect only first render (componentDidMount)')
    document.title = counter.toString()
  }, [])

  useEffect(() => {
    console.log('useEffect first render and every counter change')
    document.title = counter.toString()
  }, [counter])

  return <>
    Hello, {counter} {fake}
    <button onClick={() => setFake(fake + 1)}>fake+</button>
    <button onClick={() => setCounter(counter + 1)}>count+</button>
  </>
}

export const SetIntervalExample = () => {
  const [fake, setFake] = useState(1)
  const [counter, setCounter] = useState(1)

  console.log('SetTimeoutExample')

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter(state => state + 1)
    }, 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return <>
    Hello, counter: {counter} - fake: {fake}
    {/* <button onClick={() => setFake(fake + 1)}>fake+</button>
    <button onClick={() => setCounter(counter + 1)}>count+</button>
		*/}
  </>
}


export const ResetEffectExample = () => {
  const [counter, setCounter] = useState(1)

  console.log('Compoent rendered with ' + counter)

  useEffect(() => {
    console.log('Effect occurred' + counter)
    return () => {
      console.log('RESET EFFECT' + counter)
    }
  }, [counter])

  const increase = () => setCounter(counter + 1)
  return <>
    Hello, counter: {counter} <button onClick={increase}>+</button>
  </>
}
export const KeysTrackerExample = () => {
  const [text, setText] = useState('')

  console.log('Compoent rendered with ' + text)
  const handler = (e: KeyboardEvent) => {
    console.log(e.key)
    setText(text + e.key)
  }

  useEffect(() => {
    window.addEventListener('keypress', handler)
    return () => {
      window.removeEventListener('keypress', handler)
    }
  }, [text])

  return <>
    Typed text:  {text}
  </>
}

export const SetTimeoutExample = () => {
  const [text, setText] = useState('')

  console.log('Compoent rendered with ' + text)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log('TIMEOUT EXPIRED')
      setText('3 second passed')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [text])

  return <>
    text:  {text}
  </>
}
