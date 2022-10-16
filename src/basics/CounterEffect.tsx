import { useState, useEffect, useRef } from "react"
import { gsap } from 'gsap'
const MAX_COUNT: number = 10;

type CounterProps = {
  initialCount?: number;
}

const CounterEffect = ({initialCount = 0}: CounterProps) => {
  const [counter, setCounter] = useState(initialCount);
  const counterEl = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if(counter < 10) return
    console.log("%cCounter has reached 10", "color: red; font-size: 2rem; background-color: yellow;");
    const tl = gsap.timeline();
    tl.to(counterEl.current, {duration: 0.4, color: "red", y: -10, ease: "ease.out"})
      .to(counterEl.current, {duration: 0.3, color: "white", y: 0, ease: "bounce.out"})
  }, [counter])
  
  const handleClick = () => {
    setCounter(prev => Math.min(prev + 1, MAX_COUNT));
  };

  return (
    <>
      <h1>CounterEffect: </h1>
      <h2 ref={counterEl}>{counter}</h2>
      <button
        onClick={handleClick}
      > +1 </button>
    </>
  )
}

export default CounterEffect