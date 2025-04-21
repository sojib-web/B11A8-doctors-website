// @ts-nocheck
import React from "react";
import DoctorsCard from "../DoctorsCard/DoctorsCard";

const DoctorsContainer = ({ DoctorsData }) => {
  console.log(DoctorsData);
  return (
    <div>
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-[#0F0F0F] sm:text-4xl md:mx-auto">
          Our Best Doctors
        </h2>
        <p className="text-sm text-[#0F0F0F] md:text-lg line-clamp-2">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {DoctorsData.map((doctor) => (
          <DoctorsCard doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default DoctorsContainer;
