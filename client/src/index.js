import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./Redux/Store.js";
import { BrowserRouter as Router } from "react-router-dom";
// import decode from "jwt-decode";
// import { userRegistered } from "./Redux/Actions/userAction";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
