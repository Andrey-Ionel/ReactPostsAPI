import React, { StrictMode } from "react";
import { PostsProvider } from "./PostsContext";
import 'antd/dist/antd.css';
import ReactDOM from "react-dom";
import Uikit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import "uikit/dist/css/uikit.css";
import App from "./App";
Uikit.use(Icons);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <PostsProvider>
      <App />
    </PostsProvider>
  </StrictMode>,
  rootElement
);
