import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "../styles/base.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
