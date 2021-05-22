import { StrictMode } from "react";

import ReactDOM from "react-dom";
import Uikit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import "uikit/dist/css/uikit.css";
import App from "./App";
Uikit.use(Icons);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
