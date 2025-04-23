// @ts-nocheck
import React, { useState } from "react";
import bannerImg1 from "../../assets/banner-img-1.png";
import bannerImg2 from "../../assets/banner img 2.jpg";
import TextHeader from "../TextHeader/TextHeader";
import "./Hero.css";
const Hero = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="hero mt-5 mb-10">
      <div className="px-4   py-16 w-full mx-auto    sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
        <TextHeader
          title="Dependable Care, Backed by Trusted Professionals."
          description="Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust."
        />

        <div>
          <form
            onSubmit={(e) => {
              handleSearch(e, searchTerm);
              // reset input
              setSearchTerm("");
            }}
            className="flex flex-col md:flex-row justify-center items-center mb-8 md:px-24"
          >
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white border border-gray-300 rounded-2xl  w-2/3 h-10 px-4 mb-3 focus:outline-none 
            focus:shadow-outline md:mr-2 md:mb-0 "
              type="text"
              placeholder="Search any doctor..."
            />
            <button
              type="submit"
              className="btn bg-[#176AE5] text-white rounded-2xl"
            >
              Search Now
            </button>
          </form>
        </div>
        <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
          <div className="grid grid-cols-2 gap-5">
            <img
              className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
              src={bannerImg1}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center">
            <img
              className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
              src={bannerImg2}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
