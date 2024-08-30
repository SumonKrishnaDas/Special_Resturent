

import Main from "../Layout/Main";
import Home from "../Layout/Pages/Home/Home";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main> </Main>,
    children:[{

        path:'/',
        element:<Home> </Home>
    }


    ]
  },
]);

