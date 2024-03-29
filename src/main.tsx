import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { OptionsProvider } from "./context/OptionContext.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <OptionsProvider>
      <App />
    </OptionsProvider>
  </React.StrictMode>
);
