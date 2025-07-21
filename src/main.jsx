import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Toaster } from "react-hot-toast";
import Loader from "./components/Loader/Loader.jsx";
import store from "./store.js";
import { Provider } from "react-redux";
import NotificationHandler from "./components/Notification/NotificationHandler.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster reverseOrder={false} />
      <NotificationHandler />
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>
);
