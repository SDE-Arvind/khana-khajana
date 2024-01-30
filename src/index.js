import './index.css';

import React, { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import About from './components/About';
import AppLayout from './App';
import Body from './components/Body';
import ContactUs from './components/ContactUs';
import Help from './components/Help';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const RestaurantDetails = lazy(() => import('./components/RestaurantDetails'));

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <ContactUs />
      },
      {
        path: '/help',
        element: <Help />
      },
      {
        path: "restaurant/:id",
        element: <Suspense fallback={<Body />}><RestaurantDetails /></Suspense>,
      },
    ]

  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
