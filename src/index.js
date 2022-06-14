import React from 'react';
import ReactDOM from 'react-dom/client'; //glue for reactJS pump into empty div
//import './index.css';
import App from './App'; //app is the top root, similar to main function in Java

import HelloWorld from "./hello";
import Todo from "./components/Todo"
import todos from './components/todos.json'
//import reportWebVitals from './reportWebVitals';
import NavigationExample from './components/NavigationExample';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(             
  //render: first item what you want to draw, where you want to draw
  // function become tag, use attribute to pass a map
  // <HelloWorld/>,
  // <Todo todos={todos}/>, 
  <NavigationExample/>,
  document.getElementById('root') //inject into div
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
