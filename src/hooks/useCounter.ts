import {useEffect, useState, useRef, useLayoutEffect} from 'react'
import { gsap } from 'gsap'


const useCounter = ({maxCount = 10}) => {
  const [counter, setCounter] = useState(5)
  const elementToAnimate = useRef<HTMLHeadingElement>(null)
  const tlRef = useRef(gsap.timeline())
  
  useLayoutEffect(() => {
    if(!elementToAnimate.current) return

    tlRef.current.to(elementToAnimate.current, {duration: 0.4, color: "red", y: -10, ease: "ease.out"})
      .to(elementToAnimate.current, {duration: 0.3, color: "white", y: 0, ease: "bounce.out"})
      .pause()
  }, [])

  useEffect(() => {
    tlRef.current.play(0)
  }, [counter])
  
  const handleClick = () => {
    setCounter(prev => Math.min(prev + 1, maxCount));
  };

  return { 
    counter,
    handleClick,
    elementToAnimate
  };
}

export default useCounter;