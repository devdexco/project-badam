
/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { hot } from 'react-hot-loader/root';
import './index.css'

const HotApp = hot(App);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HotApp />
  </React.StrictMode>,
);
