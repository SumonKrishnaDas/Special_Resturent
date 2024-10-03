import Main from "../Layout/Main";
import Home from "../Layout/Pages/Home/Home";
import Order from "../Layout/Pages/Order/order";
import {
  createBrowserRouter,
} from "react-router-dom";
import Menu from "../Layout/Pages/Menu/Menu";
import Login from "../Layout/Pages/Login/Login";
import SignUp from "../Layout/Pages/Login/SignUp";
import Secure from "../Layout/Pages/Secure/Secure";
import PrivateRoute from "./PrivateRoute";


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
path:'/order/:category',
element:<Order> </Order>

    },

    {
      path:'/login',
      element:<Login>  </Login>
    },
    {
       path:'/Signup',
       element:<SignUp>  </SignUp>
    },

    {
  path:"/secure",
  element:<PrivateRoute><Secure> </Secure></PrivateRoute>
 },
 {
  path:"/addToCart",
  element:<h1> hello world </h1>
 },

    ]
  },
]);

