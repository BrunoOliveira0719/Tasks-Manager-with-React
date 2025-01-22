import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import DetailsTask from './pages/DetailsTask.jsx'
import UpdateTasK from './pages/UpdateTask.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
{
  path: "/",
  element: <App />,
},
{
  path: "/details_task",
  element: <DetailsTask />,
},
{
  path: "/update_task",
  element: <UpdateTasK />
}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
