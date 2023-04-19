import { createStore } from 'redux'
import { configureStore, createReducer } from '@reduxjs/toolkit';
import accordionReducer from '../features/accordionSlice';
import cartReducer from '../features/cartSlice';
import servicesReducer from './features/servicesSlice';
import productsReducer from './features/productsSlice';

export default configureStore({
  reducer: {
    accordion: accordionReducer,
    cart: cartReducer,
    services: servicesReducer,
    products: productsReducer,
  },
});
function getserviceid(state = [], action) {
  switch (action.type) {
    case 'GET_SERVICE_ID':
      return state.concat([action.text])
    default:
      return state
  }
}

// store.dispatch({
//   type: 'ADD_TODO',
//   text: 'Read the docs'
// })

//console.log(store.getState())
// [ 'Use Redux', 'Read the docs' ]

function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text
  }
}

//store.dispatch(addTodo('Read the docs'))
//store.dispatch(addTodo('Read about the middleware'))