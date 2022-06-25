import React from 'react';
import ReactDOM from 'react-dom/client'; //glue for reactJS pump into empty div
import App from './App'; //app is the top root, similar to main function in Java


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(    
  <App/>, // injecting the whole AP into the dom
  
  document.getElementById('root') //inject into div
);

