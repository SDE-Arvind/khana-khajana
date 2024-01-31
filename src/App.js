import Footer from './components/Footer';
import { Header } from './components/Header';
import { Outlet } from 'react-router-dom';
import React from 'react';

function AppLayout() {
  return (
    <div style={{ marginTop: 100 }}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
export default AppLayout