import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import New from './new/New.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Catalog from './catalog/Catalog.jsx'
import Card from './card/Card.jsx'
import Cart from './cart/Cart.jsx'

const router = createBrowserRouter([
  {
    path: "/new",
    element: <New/>
  },
  {
    path: "/",
    element: <Catalog/>
  },
  {
    path: "/:id",
    element: <Card />
  },
  {
    path: "/cart",
    element: <Cart />
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(<>
  <RouterProvider router={router}></RouterProvider>
</>)