import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster reverseOrder={false} />
    <Suspense fallback="loading.....">
      <App />
    </Suspense>
  </React.StrictMode>
);
