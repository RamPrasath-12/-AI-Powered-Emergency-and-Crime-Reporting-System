import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import AuthProvider from "./context/AuthProvider.jsx"; // ✅ Ensure the correct extension

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App /> 
  </StrictMode>
);
