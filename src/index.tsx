import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App_new";
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";
import App from "./App";
import { ContextApp } from "hoc/Context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextApp>
        <App />
      </ContextApp>
    </BrowserRouter>
  </React.StrictMode>
); */
