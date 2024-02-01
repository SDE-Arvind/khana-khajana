import './index.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import About from "./component/About";
import AppLayout from './App';
import Body from "./component/Body";
import Contact from "./component/Contact";
import Error from "./component/Error";
import Login from "./component/Login";
import Profile from "./component/ProfileClass";
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import RestaurantMenu from "./component/RestaurantMenu";
import reportWebVitals from './reportWebVitals';
import { store } from './store';

// call createBrowserRouter for routing different pages
const appRouter = createBrowserRouter([
  {
    path: "/", // show path for routing
    element: <AppLayout />, // show component for particular path
    errorElement: <Error />, // show error component for path is different
    children: [
      // show children component for routing
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
        children: [{ // nested routing
          path: "profile",
          element: <Profile />,
        }]
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Provider store={store}>
  <RouterProvider router={appRouter} /></Provider>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
