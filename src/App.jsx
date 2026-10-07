import { useState } from 'react'
import './App.css'
import MainLayout from './components/Layout/MainLayout.jsx'
import Product from './components/pages/product.jsx'
import AddProduct from './components/pages/AddProduct.jsx'
import Productdetail from './components/pages/productdetail.jsx'
import { createBrowserRouter, RouterProvider ,useParams } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


function App() {
   
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,

      children: [
        {
          path: 'product',
          element: <Product />,
        },
        {
          path: 'product/:id',
          element: <Productdetail />,
        },
        {
          path: 'add',
          element: <AddProduct/>,
        },
      ],
    },
  ])

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App