import { reducer, StateType, TOGGLE_COLLAPSED } from "./reducer"

test('reducer should be true', () => {
  // data
  const state: StateType = {
    collapsed: false
  }
  // action
  const newState = reducer(state, { type: TOGGLE_COLLAPSED })
  expect(newState.collapsed).toBe(true)
})

test('reducer should be false', () => {
  // data
  const state: StateType = {
    collapsed: true
  }
  // action
  const newState = reducer(state, { type: TOGGLE_COLLAPSED })
  expect(newState.collapsed).toBe(false)
})
test('reducer should be throw error because action type is incorrect', () => {
  // data
  const state: StateType = {
    collapsed: true
  }
  // action
  expect(() => reducer(state, { type: 'FAKETYPE' })).toThrowError()
})
