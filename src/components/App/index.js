import React from "react";
import JobSearchGuide from "../JobSearchGuide";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../Home";

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobsearchguide",
        element: <JobSearchGuide />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
