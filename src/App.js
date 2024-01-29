import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import Footer from './components/Footer';
import { Header } from './components/Header';
import React from 'react';

function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
export default AppLayout