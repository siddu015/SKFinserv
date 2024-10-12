import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import AboutUs from './pages/aboutUs.jsx';
import Budgeting from './pages/Budgetting.jsx';
import Emergency from './pages/Emergency.jsx';
import ChildEducation from "./pages/ChildEducation.jsx";
import Retirement from "./pages/Retirement.jsx";
import RiskManagement from "./pages/RiskManagement.jsx";
import Wealth from "./pages/Wealth.jsx";
import ContactUs from "./pages/ContactUs.jsx"

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
    },{
        path: "/service/retirement",
        element: <Retirement/>
    },{
        path: "/service/riskManagement",
        element: <RiskManagement />
    },{
        path: "/service/wealth",
        element: <Wealth />
    },{
        path: "/contactUs",
        element: <ContactUs />
    },
]);

const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);