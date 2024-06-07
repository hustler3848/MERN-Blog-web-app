import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Projects from "./Projects.jsx";
import Home from "./Home.jsx";
import SignIn from "./Sign-in.jsx";
import Signup from "./Signup.jsx";
import Dashboard from "./Dashboard.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projects",
    element: <Projects />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/login",
    element: <SignIn />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
