import React, { useEffect, useState } from "react";
import DoctorsCard from "../DoctorsCard/DoctorsCard";
import Button from "../Botton/Button";
import TextHeader from "../TextHeader/TextHeader";

const DoctorsContainer = ({ doctors }) => {
  const [disPlayDoctor, setDisplayDoctor] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (showAll) {
      setDisplayDoctor(doctors);
    } else {
      setDisplayDoctor(doctors.slice(0, 6));
    }
  }, [doctors, showAll]);

  return (
    <div>
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <TextHeader
          title="Our Best Doctors"
          description="Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust."
        />
      </div>

      {disPlayDoctor.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {disPlayDoctor.map((doctor, index) => (
              <DoctorsCard key={index} doctor={doctor} />
            ))}
          </div>
          <div className="flex justify-center">
            <Button
              onClick={() => setShowAll((prv) => !prv)}
              label={showAll ? "Less Doctors" : "View All Doctors"}
            />
          </div>
        </>
      ) : (
        <div className="text-center text-gray-500 text-xl mt-10">
          🩺 No Doctors Found
        </div>
      )}
    </div>
  );
};

export default DoctorsContainer;
