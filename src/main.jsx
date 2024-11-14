import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import ImageGallery from './components/ImageGallery'
import Services from './routes/Services'
import Pricing from './routes/Pricing'
import Contact from './routes/Contact'
import Food from './routes/Services/Food'
import Stay from './routes/Services/Stay'

const router=createBrowserRouter([
  {
    path : "",
    element:<Layout/>,
    children : [
      {
        path : "/gallery",
        element:<ImageGallery/>
      },
      {
        path:"/about",
        element:<Services/>
      },
      {
        path:"/plan",
        element:<Pricing/>
      },
      {
        path:"/contact",
        element: <Contact/>
      },
      {
        path:"/food",
        element:<Food/>
      },
      {
        path:"/stay",
        element:<Stay/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
