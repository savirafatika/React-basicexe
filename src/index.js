import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import App2 from './3-lifecycle/App2'
// import List from './4-lemparan-props/App'
// import Handle from './6-form/App'
// import Reducer from './7-useReducer/App'
// import UseRef from './8-useRef/App'
import ForwardRef from './9-forwardRef/App'
import reportWebVitals from './reportWebVitals';

// function FirstApp() {
//   return (
//     <div>
//       <h3>This is my first react app</h3>
//     </div>
//   )
// }

ReactDOM.render(
  <React.StrictMode>
    <ForwardRef />
  </React.StrictMode>,
  document.getElementById('my-root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
