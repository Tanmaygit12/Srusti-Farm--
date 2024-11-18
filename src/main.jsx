import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import ImageGallery from './components/ImageGallery'
import Services from './routes/Services'
import Pricing from './routes/Pricing'
import Contact from './routes/Contact'
import Food from './routes/Services/Food'
import Stay from './routes/Services/Stay'
import Error from './routes/Error'
import HolidayBanner from './routes/Home Content/HolidayBanner'

// const router=createBrowserRouter([
//   {
//     path : "",
//     element:<Layout/>,
//     children : [
//       {
//         path : "/gallery",
//         element:<ImageGallery/>
//       },
//       {
//         path:"/about",
//         element:<Services/>
//       },
//       {
//         path:"/plan",
//         element:<Pricing/>
//       },
//       {
//         path:"/contact",
//         element: <Contact/>
//       },
//       {
//         path:"/food",
//         element:<Food/>
//       },
//       {
//         path:"/stay",
//         element:<Stay/>
//       },
//       {
//         path:"/error",
//         element:<Error/>
//       }
//     ]
//   }
// ])

const router=createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/' element={<Layout/>}>
      <Route path='/gallery' element={<ImageGallery/>}/>
      <Route path='/about' element={<Services/>}/>
      <Route path='/plan' element={<Pricing/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/food' element={<Food/>}/>
      <Route path='/stay' element={<Stay/>}/>
      <Route path='/error' element={<Error/>}/>
      <Route path='/home' element={<HolidayBanner/>}/>
      <Route Component={Error}/>
    </Route>
    
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
