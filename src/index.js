import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

//npm install all the following:
//npm install -D tailwindcss
//npm i react-router-dom
//npm i redux
//npm install react-redux
//npm install @mui/material @emotion/react @emotion/styled
//npm install @reduxjs/toolkit
//npm install @mui/x-data-grid
// npm install @mui/lab
// npm install @mui/icons-material
