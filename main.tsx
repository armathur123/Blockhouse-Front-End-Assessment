/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import './index.css'
import Homepage from './src/Homepage/Homepage'
import BlockHouseImageExpanded from './src/Components/BlockhouseImageExpanded'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />
  },
  {
    path: '/image',
    element: <BlockHouseImageExpanded />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
