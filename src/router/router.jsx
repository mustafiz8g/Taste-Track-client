import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";

import AllFoodes from "../pages/AllFoodes";
import Gallery from "../pages/Gallery";
import Login from "../pages/login";
import Register from "../pages/register";
import MyFoods from "../pages/privatePages/MyFoods";
import AddFoods from "../pages/privatePages/AddFoods";
import MyOrders from "../pages/privatePages/MyOrders";
import PrivateRoute from "./PrivateRoute";
import Details from "../pages/Details";
import PurchaseForm from "../pages/PurchaseForm";



const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <h2>Route no found</h2>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allFoods',
                element: <AllFoodes></AllFoodes>,
                loader: () => fetch('http://localhost:3800/allFoods')
            },
            {
                path: '/allFoods/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader : ({params}) => fetch(`http://localhost:3800/allFoods/${params.id}`)
            }
            ,
            {
                path: '/foodPurchase/:id',
                element: <PrivateRoute><PurchaseForm></PurchaseForm></PrivateRoute>,
               
            }
            ,
            {
                path: '/gallery',
                element: <Gallery></Gallery>
            },



            //private page
            {
                path: '/myFoods',
                element:<PrivateRoute><MyFoods></MyFoods></PrivateRoute>
            },
            {
                path: '/addFoods',
                element: <PrivateRoute><AddFoods></AddFoods></PrivateRoute>
            },
            {
                path: '/myOrders',
                element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
              
            },
          
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },

        ]

    }
])

export default router