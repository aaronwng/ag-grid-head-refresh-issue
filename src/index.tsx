import { render } from "react-dom";
import React, { createRef, useEffect } from "react";

import App from "./App";

const rootElement = document.getElementById("root");
render(
  <div>
    <App />
  </div>,
  rootElement
);
