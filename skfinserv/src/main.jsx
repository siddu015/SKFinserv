import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import AboutUs from './pages/aboutUs.jsx';
import Budgeting from './pages/Budgetting.jsx';
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/aboutUs", // Change to a more appropriate route for About Us
        element: <AboutUs />
    },{
        path: "/service/budgeting", // Change to a more appropriate route for About Us
        element: <Budgeting />
    }
]);

const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);