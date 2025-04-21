// @ts-nocheck
import React from "react";
import counterImg from "../../assets/success-doctor.png";
import counterImg1 from "../../assets/success-patients.png";
import counterImg2 from "../../assets/success-review.png";
import counterImg3 from "../../assets/success-staffs.png";
import CountUp from "react-countup";
const CounterCard = ({ doctors }) => {
  const total_patients = doctors.reduce(
    (acc, doctor) => acc + doctor.total_patients,
    0
  );
  const total_reviews = doctors.reduce(
    (acc, doctor) => acc + doctor.total_reviews,
    0
  );
  const total_staff = doctors.reduce(
    (acc, doctor) => acc + doctor.total_staff,
    0
  );
  const total_doctors = doctors.length;
  return (
    <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="shadow-lg bg-[#FFFFFF] rounded-2xl items-center text-center p-4">
        <img src={counterImg} alt="" className="mx-auto mb-4" />
        <p className="text-3xl font-bold text-blue-600">
          <CountUp end={total_doctors} duration={2} suffix="+" />
        </p>
        <h3 className="text-lg font-semibold mb-2">Total Doctors</h3>
      </div>

      <div className="shadow-lg bg-[#FFFFFF] rounded-2xl items-center text-center p-4">
        <img src={counterImg1} alt="" className="mx-auto mb-4" />
        <p className="text-3xl font-bold text-blue-600">
          <CountUp end={total_patients} duration={2} suffix="+" />
        </p>
        <h3 className="text-lg font-semibold mb-2"> Patients</h3>
      </div>

      <div className="shadow-lg bg-[#FFFFFF] rounded-2xl items-center text-center p-4">
        <img src={counterImg2} alt="" className="mx-auto mb-4" />
        <p className="text-3xl font-bold text-blue-600">
          <CountUp end={total_reviews} duration={2} suffix="+" />
        </p>
        <h3 className="text-lg font-semibold mb-2">Total Reviews</h3>
      </div>

      <div className="shadow-lg bg-[#FFFFFF] rounded-2xl items-center text-center p-4">
        <img src={counterImg3} alt="" className="mx-auto mb-4" />
        <p className="text-3xl font-bold text-blue-600">
          <CountUp end={total_staff} duration={2} suffix="+" />
        </p>
        <h3 className="text-lg font-semibold mb-2">Total Stuffs</h3>
      </div>
    </div>
  );
};

export default CounterCard;
