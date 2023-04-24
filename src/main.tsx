import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import ErrorPage from "./pages/error"
import Header from "./ui/layouts/Header"
import HomePage from "./pages/home"
import InternalPage from "./pages/podcast"

import "./index.css"
import Internal from "./ui/layouts/Internal"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "podcast/:id",
        element: <Internal />,
        children: [
          {
            path: "",
            element: <InternalPage />,
          },
          {
            path: "episode/:epid",
            element: <div>ep page here</div>,
          },
        ],
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
