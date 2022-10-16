export type ActionType = {
  type: 'INCREASE_BY',
  payload: {
    value: number;
  }
} | {
  type: 'RESET'
}


export const doReset = (): ActionType => ({
  type: 'RESET'
})

export const doIncreaseBy = (value: number): ActionType => ({
  type: 'INCREASE_BY',
  payload: {
    value
  }
})