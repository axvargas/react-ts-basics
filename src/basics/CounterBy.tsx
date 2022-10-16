
import { useState } from "react"

type CounterProps = {
  initialCount?: number;
}

type CounterState = {
  counter: number;
  clicks: number;
}

const CounterBy = ({initialCount=0}: CounterProps) => {
  const [{counter, clicks}, setCounterState] = useState<CounterState>({
    counter: initialCount,
    clicks: 0
  });

  const handleClick = (num: number) => {
    setCounterState(({counter, clicks}) => ({
      counter: counter + num,
      clicks: clicks + 1
    }));
  };

  return (
    <>
      <h1>CounterBy: {counter}</h1>
      <h4>Number of clicks: {clicks}</h4>
      <button
        onClick={()=> handleClick(1)}
      > +1 </button>
      <button
        onClick={()=> handleClick(5)}
      > +5 </button>
    </>
  )
}

export default CounterBy