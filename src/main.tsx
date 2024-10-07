import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/index.tsx";
import { Provider } from "react-redux";
import { store } from "./Redux/store.ts";
import { GoogleOAuthProvider } from "@react-oauth/google";
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <Provider store={store}>
        <ToastContainer />
        <RouterProvider router={routes} />
      </Provider>
    </GoogleOAuthProvider>
  </StrictMode>
);
