import { ActionType } from "../actions/actions";
import { CounterState } from "../interfaces/interfaces";

export const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0
}

export const counterReducer = (state: CounterState, action: ActionType): CounterState => {
  const { type } = action;
  const { counter, changes } = state;
  switch(type) {
    case 'INCREASE_BY':
      return {
        ...state,
        counter: counter + action.payload.value,
        previous: counter,
        changes: changes + 1
      }
    case 'RESET':
      return INITIAL_STATE
    default:
      return state;
  }
}