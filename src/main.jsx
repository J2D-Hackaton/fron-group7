import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import DroughtApp from "./DroughtApp.jsx";
import { AuthProvider } from "./context/auth.context";
import { MapProvider } from "./context/map.context";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MapProvider>
        <AuthProvider>
          <DroughtApp />
        </AuthProvider>
      </MapProvider>
    </BrowserRouter>
  </React.StrictMode>
);
