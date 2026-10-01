import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import UniversityBanner from "../components/UniversityBaner";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="min-h-[80vh] w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default HomeLayout;
