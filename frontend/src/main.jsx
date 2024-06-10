import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Projects from "./Projects.jsx";
import Home from "./Home.jsx";
import SignIn from "./Sign-in.jsx";
import SignUp from "./Components/Signup.jsx";
import Dashboard from "./Dashboard.jsx";
import ThemeProvider from './ThemeProvider.jsx'
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { persistor, store } from "./redux/store.js";

// import { store } from './app/store
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react";


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
    element: <SignUp />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
 <Provider store={store}>
  <ThemeProvider>
    <RouterProvider router={router} />
    </ThemeProvider>
    </Provider>
    </PersistGate>
  </React.StrictMode>
);
