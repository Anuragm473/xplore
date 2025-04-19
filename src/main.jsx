import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./Pages/HomePage";
import ToursPage from "./Pages/ToursPage";
import "./index.css"; // Your global styles
import TourDetailsPage from "./Pages/TourDetailsPage";
import VisaSelectionPage from "./Pages/VisaSelectionPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // common layout (Nav, header, footer, etc.)
    children: [
      {
        index: true,
        element: <HomePage />,
      }
    //   {
    //     path: "tours",
    //     element: <ToursPage />,
    //   },
    //   {
    //     path: "tours/tour",
    //     element: <TourDetailsPage />,
    //   },
    //   {
    //     path: "visa",
    //     element: <VisaSelectionPage/>,
    //   }
    // ],
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
