import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-[80vh] w-full">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default HomeLayout;
