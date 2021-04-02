import {
  Button,
  Container,
  Header,
} from 'semantic-ui-react'
import { useState, useEffect, useRef } from 'react'
import ColorCode from '../components/ColorCode'

export default function Home() {
  const [r, setR] = useState('00')
  const [g, setG] = useState('00')
  const [b, setB] = useState('00')
  const refR = useRef(r)
  const refG = useRef(g)
  const refB = useRef(b)

  const [button, setButton] = useState('ON')
  const [intervalId, setIntervalId] = useState()

  const changeColor = (index, value) => {
    switch (index) {
      case 'r':
        setR(('00' + value.toString(16)).slice(-2))
        break
      case 'g':
        setG(('00' + value.toString(16)).slice(-2))
        break
      case 'b':
        setB(('00' + value.toString(16)).slice(-2))
        break
      default:
        setR('00')
        setG('00')
        setB('00')
    }
  }

  useEffect(() => {
    refR.current = r
    refG.current = g
    refB.current = b
  })

  const timer = () => {
    if (parseInt(refR.current, 16) < 255)
      changeColor('r', parseInt(refR.current, 16) + 1)
    else
      changeColor('r', 0)
    if (parseInt(refG.current, 16) < 255)
      changeColor('g', parseInt(refG.current, 16) + 1)
    else
      changeColor('g', 0)
    if (parseInt(refB.current, 16) < 255)
      changeColor('b', parseInt(refB.current, 16) + 1)
    else
      changeColor('b', 0)
  }

  const addColorCode = () => {
    if (button === 'ON') {
      setIntervalId(setInterval(timer, 250))
      setButton('OFF')
    } else {
      clearInterval(intervalId)
      setButton('ON')
    }
  }

  return (
    <Container>
      <ColorCode r={r} g={g} b={b} setRGB={(index, value) => changeColor(index, value)} />
      <Button content={button} onClick={e => addColorCode()} />
      <div
        className="box"
        style={{backgroundColor: `#${r}${g}${b}`}} >
      <Header size="large" color="grey">
        {`#${r}${g}${b}`}
      </Header>
      </div>
      <style jsx>{`
        .box {
          height: 100vh;
          margin: 1em 0 0 0;
          padding: 1em 0 0 1em;
        }
      `}</style>
    </Container>
  )
}