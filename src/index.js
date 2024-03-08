import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';

import App from './App';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
const Moralis = require("moralis").default;

// const appId = "bbBYitqcYOjgWocrxD77dmG5KTfMz6x7snnWuBh0"; // APP ID
// const serverUrl = "https://lvgfbwbjbxtu.moralis.io:2053/server";
// await Moralis.start({
//   apiKey: process.env.YOUR_MORALIS_APP_ID,
// });

Moralis.start({ apiKey: process.env.YOUR_MORALIS_APP_ID }).then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
