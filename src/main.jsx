import React from "react";
import ReactDOM from "react-dom/client";
import Shop from './pages/Shop'
import App from "./App";
import "./index.css";
import { BrowserRouter, HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
      <Shop />
    </HashRouter>
  </React.StrictMode>
);