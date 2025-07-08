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
import MainLayout from './layouts/MainLayout.jsx';
import Home from './components/Home.jsx';
import CoffeeDetails from './components/CoffeeDetails.jsx';
import Signin from './components/Signin.jsx';
import Signup from './components/Signup.jsx';
import AuthProviders from './providers/AuthProviders.jsx';
import Users from './components/Users.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                loader: () => fetch('https://coffee-store-server-one-kappa.vercel.app/coffees'),
                Component: Home
            },
            {
                path: 'addCoffee',
                Component: AddCoffee
            },
            {
                path: 'coffee/:id',
                Component: CoffeeDetails
            },
            {
                path: 'updateCoffee/:id',
                loader: ({ params }) => fetch(`https://coffee-store-server-one-kappa.vercel.app/coffees/${params.id}`),
                Component: UpdateCoffee
            },
            {
                path: '/signin',
                element: <Signin></Signin>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/users',
                element: <Users></Users>,
                loader: () => fetch('https://coffee-store-server-one-kappa.vercel.app/users')
            }
        ]
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProviders>
            <RouterProvider router={router} />
        </AuthProviders>
    </StrictMode >,
)
