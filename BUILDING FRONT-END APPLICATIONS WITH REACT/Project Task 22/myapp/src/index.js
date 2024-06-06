import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

import App from "./App"
// import Contact from './components/Contact'
// import Random from './components/Random'

// import Mainapp from './components/project26/Mainapp'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* For projecttask 23 and 25 and 27 and 28 uncomment App */}
    <App/>   

    {/* For project task 22 uncomment contact */}
    {/* <Contact/> */}

    {/* For project task 24 uncomment random */}
    {/* <Random/> */}

    {/* For project task 6 uncomment mainapp */}
    {/* <Mainapp/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
