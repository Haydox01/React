import React from 'react'
import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    const [step, setStep] = useState(1)

    const date = new Date("june 16 2024")
    date.setDate(date.getDate() + count)

    function countIncrement() {
        setCount((currentCount) => currentCount + step);
    }
    function countDecrement() {
        if (count >= 1)
         setCount((currentStep) => currentStep - step);
    }
    function stepIncrement() {
        setStep((currentStep) => currentStep + 1);
    }
    function stepDecrement() {
        if (count >= 1)
         setStep((currentStep) => currentStep - 1);
    }
  return (
    <div>
        <div>
            <button onClick={stepDecrement}>-</button>
            <span>Step: {count}</span>
            <button onClick={stepIncrement}>+</button>
        </div>
        <div>
            <button onClick={countDecrement}>-</button>
            <span>Count: {count}</span>
            <button onClick={countIncrement}>+</button>
        </div>
        

        <p>{date.toDateString()}</p>
    </div>
  )
}

export default Counter