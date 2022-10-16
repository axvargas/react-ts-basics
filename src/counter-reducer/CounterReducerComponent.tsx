import { useReducer } from "react"
import * as actions from "./actions/actions"
import { counterReducer, INITIAL_STATE } from "./state/counterReducer"


const CounterReducerComponent = () => {
  const [{counter, previous, changes}, dispatch] = useReducer(counterReducer, INITIAL_STATE)

  const increaseBy = (value: number) => {
    dispatch(actions.doIncreaseBy(value))
  }

  const resetCounter = () => {
    dispatch(actions.doReset())
  }

  return (
    <>
      <h1>Counter Reducer:</h1>
      <h2>Actual value: {counter}</h2>
      <h2>Previous value: {previous}</h2>
      <h2>Changes: {changes}</h2>
      <button
        onClick={()=> increaseBy(1)}
      > +1 </button>
      <button
        onClick={()=> increaseBy(5)}
      > +5 </button>
      <button
        onClick={()=> increaseBy(10)}
      > +10 </button>
      <button
        onClick={resetCounter}
      > Reset </button>
    </>
  )
}

export default CounterReducerComponent