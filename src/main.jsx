import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';

import Appliedjobs from './Components/Appliedjobs/Appliedjobs.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import JobDtails from './Components/JobDtails/JobDtails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:'/applied',
        element: <Appliedjobs></Appliedjobs>,
        loader: () => fetch('/jobdata.json')
      },
      {
        path: "/job/:id",
        element: <JobDtails />,
        loader: () => fetch('/jobdata.json')
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
