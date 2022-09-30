import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "semantic-ui-css/semantic.min.css";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import productsReducer from './features/productsSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    
  </React.StrictMode>
);
