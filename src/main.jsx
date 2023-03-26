import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App';
import { Provider } from 'react-redux/es/exports';
import { BrowserRouter } from 'react-router-dom'
import { store } from './store/store';
import './i18n'

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <React.Suspense fallback='loading'>
        <App />
      </React.Suspense>
    </BrowserRouter>
  </Provider>
)
