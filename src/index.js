import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "semantic-ui-css/semantic.min.css";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import productsReducer, { productsFetch } from './features/productsSlice';
import servicesReducer, { servicesFetch } from './features/servicesSlice';
import { productsApi } from './features/productsApi';
import cartReducer, { getTotals } from './features/cartSlice';
import accordionReducer from './features/accordionSlice';


const store = configureStore({
  reducer: {
    products: productsReducer,
    accordion: accordionReducer,
    services: servicesReducer,
    cart: cartReducer, 
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware);
  }
});

store.dispatch(productsFetch());
store.dispatch(servicesFetch());
store.dispatch(getTotals());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    
  </React.StrictMode>
);
