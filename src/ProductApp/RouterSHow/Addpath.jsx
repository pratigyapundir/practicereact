import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { lazy,Suspense } from 'react'

import Layout from "./Layout"
const HomePage=lazy(()=>import('../Home/HomePage'))
const ProductsList=lazy(()=>import('../Home/ProductsList'))
const Details=lazy(()=>import('../Home/Details'))
const Login=lazy(()=>import('../Home/Login'))
const SignUp=lazy(()=>import('../Home/SignUp'))
const AddCart=lazy(()=>import('../Home/AddCart'))
// const Layout=lazy(()=>import("../Home/Edit"))
const Protected=lazy(()=>import("./Protected"))
const Edit=lazy(()=>import("../Home/Edit"))


const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [

      // Public routes
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },

      // Protected routes
      {
        element: <Protected />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
          {
            path: "/product",
            element: <ProductsList />,
          },
          {
            path: "/product/:id",
            element: <Details />,
          },
          {
            path: "/cart",
            element: <AddCart />,
          },
          {
            path: "/edit",
            element: <Edit />,
          },
        ],
      },
    ],
  },
]);
const Addpath = () => {
  return (
  <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <h1 className="text-2xl font-bold">
            Loading...
          </h1>
        </div>
      }
    >
      <RouterProvider router={route} />
    </Suspense>
  )
}

export default Addpath