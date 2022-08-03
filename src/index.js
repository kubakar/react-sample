import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { FavsCtxProvider } from "./store/favs-ctx"; // context wrapper

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // React.StrictMode renders app twice in dev!!
  // <React.StrictMode>
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>
  // </React.StrictMode>

  // provide global state/context to whole app
  <FavsCtxProvider>
    {/* https://create-react-app.dev/docs/deployment/ */}
    <BrowserRouter basename="/react-sample">
      <App />
    </BrowserRouter>
  </FavsCtxProvider>
);
