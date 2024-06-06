import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from "react-dom"; // Correct import for ReactDOM
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import 'flowbite/dist/flowbite.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <header className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <App />
    </header>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
