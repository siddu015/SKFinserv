import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import AboutUs from './pages/aboutUs.jsx';
import Budgeting from './pages/Budgetting.jsx';
import Emergency from './pages/Emergency.jsx';
import ChildEducation from "./pages/ChildEducation.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/aboutUs",
        element: <AboutUs />
    },{
        path: "/service/budgeting",
        element: <Budgeting />
    },{
        path: "/service/emergency",
        element: <Emergency/>
    },{
        path: "/service/childEducation",
        element: <ChildEducation/>
    },
]);

const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);