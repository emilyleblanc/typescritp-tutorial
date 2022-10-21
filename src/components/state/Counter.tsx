import { useReducer } from 'react'
//create a type for state obj
type CounterState = {
    count: number
}
//create a type for action obj
type CounterAction = {
    type: string
    payload: number
}

const initialState = { count: 0 }

function reducer(state: CounterState, action: CounterAction){
    switch(action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        default:
            return state
    }
}

export default function Counter() {
    const [ state, dispatch ] = useReducer( reducer, initialState)
  return (
    <>
        <p>Count: {state.count}</p>
        <button onClick={ () => dispatch({ type:'increment', payload: 10})}>Increment 10</button>
        <button onClick={ () => dispatch({ type:'decrement', payload: 10})}>Decrement 10</button>
    </>
  )
}
