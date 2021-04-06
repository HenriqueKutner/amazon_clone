import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './App.css';
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  rootElement
);