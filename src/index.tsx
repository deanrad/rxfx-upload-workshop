import * as React from "react";
import "./styles.scss";
import { uploadService } from "./services/upload-service";
import { createRoot } from "react-dom/client";

import { App } from "./ui/App";
const AppRoot = createRoot(document.getElementById("app"));
AppRoot.render(<App />);
// document.getElementById("app").innerHTML = `

// <div class="window">
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// </div>`;
