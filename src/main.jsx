import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/Reset.css";
import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.DEV ? "/" : "/Portfolio"}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
