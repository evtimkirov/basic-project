// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';  // промени тук
import { Provider } from 'react-redux';
import { store } from './app/store.js';
import App from './App';

// Създаване на root елемент чрез createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
