import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import CheckOut from "./components/CheckOut/CheckOut";
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import Orders from "./components/Orders/Orders";
import Shop from "./components/Shop/Shop";
import "./index.css";
import AuthProvider from "./context/AuthProvider";
import SignUp from "./components/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "orders", element: <Orders /> },
      { path: "signin", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path: "inventory", element: <Inventory /> },
      { path: "checkout", element: <CheckOut /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
