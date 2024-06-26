 import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'



export default function App() {
  const [advice, setAdvice] = useState('')
  const [count, setCount] = useState(0)

  async function getAdvice(){
    const response = await fetch('https://api.adviceslip.com/advice') //   https://localhost:7007/api/authors
    const data = await response.json()
    setAdvice(data.slip.advice)
    setCount(count + 1) // OR setCount((c) => c + 1)
  }
  useEffect(() => {getAdvice()}, [])
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <Message count={count} />
    </div>
  )
}


 function Message(props) {
  return (
    <div>
      <p>
      You have read <strong>{props.count}</strong> Pieces of advice
      </p>
    </div>
  )
} 