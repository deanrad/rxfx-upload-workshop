import * as React from "react";
import { Unmounter } from "@rxfx/react";
import { createRoot } from "react-dom/client";
import { App } from "./ui/App";

import "./styles.scss";

const AppRoot = createRoot(document.getElementById("app"));

AppRoot.render(
  <Unmounter>
    <App />
  </Unmounter>
);
