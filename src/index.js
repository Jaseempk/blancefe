import React from 'react';
import ReactDOM from 'react-dom';
import { MoralisProvider } from 'react-moralis';

import reportWebVitals from './reportWebVitals';

import App from './App';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import moralis from 'moralis'

// const Moralis = require('moralis')

// const appId = process.env.YOUR_MORALIS_APP_ID; // APP ID
const serverUrl = "https://lvgfbwbjbxtu.moralis.io:2053/server";
moralis.initialize(process.env.YOUR_MORALIS_APP_ID)
moralis.serverURL = serverUrl

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={process.env.YOUR_MORALIS_APP_ID} serverUrl={serverUrl}>
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
