import { createStore } from 'redux'
const store = createStore(selected, ['Use Redux'])

function getserviceid(state = [], action) {
  switch (action.type) {
    case 'GET_SERVICE_ID':
      return state.concat([action.text])
    default:
      return state
  }
}

store.dispatch({
  type: 'ADD_TODO',
  text: 'Read the docs'
})

console.log(store.getState())
// [ 'Use Redux', 'Read the docs' ]

function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text
  }
}

store.dispatch(addTodo('Read the docs'))
store.dispatch(addTodo('Read about the middleware'))