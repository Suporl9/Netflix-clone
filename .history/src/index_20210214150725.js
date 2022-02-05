import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import AuthProvider from "./context/AuthProvider";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Router>
    <AuthProvider
    <App />
  </Router>,
  document.getElementById("root")
);

reportWebVitals();
