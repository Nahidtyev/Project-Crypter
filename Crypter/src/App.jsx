import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { routers } from '../router'
import '../src/styled/global.scss'

const App = () => {
  return (
    <RouterProvider router={routers} />
  )
}

export default App