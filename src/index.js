import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./all.min.css";
import "./style.css";

import { FirebaseProvider } from "./context/Firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FirebaseProvider>
    <App />
  </FirebaseProvider>
);
