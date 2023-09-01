import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home/Home.jsx';
import Aparelhos from './routes/Aparelhos/Aparelhos.jsx';
import VisualizarAparelho from './routes/VisualizarAparelho/VisualizarAparelho.jsx';
import Error from './routes/Error/Error.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/aparelhos',
        element: <Aparelhos/>
      },
      {
        path: '/aparelhos/visualizar/:id',
        element: <VisualizarAparelho/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)