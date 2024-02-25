import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import {BrowserRouter} from "react-router-dom";
// import {GlobalState} from "./state/GlobalState";
import "./index.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserReducer";

const store = configureStore({
  reducer:{
    list: UserReducer
  }
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      {/* <GlobalState> */}
      <Provider store={store} >
      <App />
      </Provider>
      {/* </GlobalState> */}
  </React.StrictMode>
);
