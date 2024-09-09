
import Main from "../Layout/Main";
import Home from "../Layout/Pages/Home/Home";
import Order from "../Layout/Pages/Order/order";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Menu from "../Layout/Pages/Menu/Menu";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main> </Main>,
    children:[{

        path:'/',
        element:<Home> </Home>
    },
    
    {
 path:'/menu',
 element:<Menu> </Menu>

    },

    {
path:'/order',
element:<Order> </Order>

    }


    ]
  },
]);

