import React from "react";
import { runWithAdal } from "react-adal";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { authContext } from "./config/AdalConfig";
import "./index.scss";
import { AuthProvider } from "./provider/AuthProvider";
import reportWebVitals from "./reportWebVitals";

const DO_NOT_LOGIN = false;
runWithAdal(
  authContext,
  () => {
    require("./App");
  },
  DO_NOT_LOGIN
);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
