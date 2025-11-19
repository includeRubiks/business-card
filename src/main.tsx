import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Homepage from "./Homepage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Homepage data-bs-theme="dark" />
  </StrictMode>
);
