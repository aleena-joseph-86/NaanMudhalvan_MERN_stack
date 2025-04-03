import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { App, SayHello } from "./App";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <>
    {/* <SayHello /> */}
    <App />
    {/* <h1> h1 </h1>
    <h2> h2 </h2> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
