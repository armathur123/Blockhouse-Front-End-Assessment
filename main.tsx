/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import './index.css'
import Homepage from './src/Homepage/Homepage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
