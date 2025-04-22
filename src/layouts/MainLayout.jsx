import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="bg-[#ededed] mb-20 ">
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-116px)]">
        <div className="max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16 xl:px-24">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
