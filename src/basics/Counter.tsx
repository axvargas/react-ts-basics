import { useState } from "react"

type CounterProps = {
  initialCount?: number;
}

const Counter = ({initialCount = 0}: CounterProps) => {
  const [counter, setCounter] = useState(initialCount);

  const handleClick = () => {
    setCounter(prev => prev + 1);
  };

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button
        onClick={handleClick}
      > +1 </button>
    </>
  )
}

export default Counter