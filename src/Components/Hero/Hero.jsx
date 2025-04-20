import React from "react";
import bannerImg1 from "../../assets/banner-img-1.png";
import bannerImg2 from "../../assets/banner img 2.jpg";

const Hero = () => {
  return (
    <div className="px-4 py-16  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 shadow-2xl rounded-2xl mt-16 mb-16 ">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-[#0F0F0F] sm:text-4xl md:mx-auto">
          Dependable Care, Backed by Trusted Professionals.
        </h2>
        <p className="text-sm text[#0F0F0F] md:text-lg">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
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
  );
};

export default Hero;
