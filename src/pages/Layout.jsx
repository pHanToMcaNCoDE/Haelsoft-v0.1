import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Layout = ({ clicked, setClicked }) => {
  return (
    <>
      <Navbar clicked={clicked} setClicked={setClicked} />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
