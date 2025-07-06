import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import UpdateCoffee from './components/UpdateCoffee';
import AddCoffee from './components/addCoffee';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>
    },
    {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>
    },
    {
        path: "/updateCoffee",
        element: <UpdateCoffee></UpdateCoffee>
    }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
