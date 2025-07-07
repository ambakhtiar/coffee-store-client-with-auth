import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import {
    createBrowserRouter,
    RouterProvider,
<<<<<<< HEAD
} from "react-router-dom";
import UpdateCoffee from './components/UpdateCoffee';
import AddCoffee from './components/addCoffee';

=======
} from "react-router";
import MainLayout from './layouts/MainLayout.jsx';
import Home from './components/Home.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import CoffeeDetails from './components/CoffeeDetails.jsx';
import Signin from './components/Signin.jsx';
import Signup from './components/Signup.jsx';
import AuthProviders from './providers/AuthProviders.jsx';
import Users from './components/Users.jsx';
>>>>>>> d94d9a4 (auth)

const router = createBrowserRouter([
    {
        path: "/",
<<<<<<< HEAD
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
=======
        Component: MainLayout,
        children: [
            {
                index: true,
                loader: () => fetch('http://localhost:5000/coffees'),
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
                loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`),
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
                loader: () => fetch('http://localhost:5000/users')
            }
        ]
    },
>>>>>>> d94d9a4 (auth)
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
<<<<<<< HEAD
        <RouterProvider router={router} />
=======
        <AuthProviders>
            <RouterProvider router={router} />
        </AuthProviders>
>>>>>>> d94d9a4 (auth)
    </StrictMode>,
)
