import {appReducer, InitialStateType, setErrorAC, setLoadingAC} from 'app/appReducer';

let startState: InitialStateType

beforeEach(() => {
  startState = {
    loading: false,
    error: '' as string | null
  }
})

test('value loading should be changed', () => {
  const endState = appReducer(startState, setLoadingAC(true))

  expect(endState.loading).toBeTruthy()
  expect(endState.error).toBe('')
})

test('value error should be added', () => {
  const endState = appReducer(startState, setErrorAC('Some Error'))

  expect(endState.error).toBe('Some Error')
  expect(endState.loading).toBeFalsy()
})