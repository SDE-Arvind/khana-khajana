import Footer from "./component/Footer";
import Header from "./component/Header";
import { Outlet } from 'react-router-dom';
import React from 'react';

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};
export default AppLayout