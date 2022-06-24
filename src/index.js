import React from 'react';
import ReactDOM from 'react-dom/client'; //glue for reactJS pump into empty div
// import './index.css';
import App from './App'; //app is the top root, similar to main function in Java
// import HelloWorld from "./components/hello-world";
// import HelloWorld from "./hello";
// import Todo from "./components/Todo"
// import todos from './components/todos.json'
// import reportWebVitals from './reportWebVitals';
// import NavigationExample from './components/NavigationExample';
import NavigationSidebar from './components/lectures/Build/NavigationSidebar';
import Add from './components/Add';
import Subtract from './components/Subtract';
import Radio from './components/midterm/radio.js'
// import ReduxExamples from './components/lectures/w8/ReduxExamples';
import ReduxExamples from './components/labs/redux-examples';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(    
  <App/>, // injecting the whole AP into the dom
  
  document.getElementById('root') //inject into div
);

