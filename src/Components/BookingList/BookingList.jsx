// @ts-nocheck

import React, { useState } from "react";
import TextHeader from "../TextHeader/TextHeader";
import { Link, useLoaderData } from "react-router-dom";
import Button from "../Botton/Button";
import toast from "react-hot-toast";
import BarCharts from "../BarChart/BarCharts";

const BookingList = () => {
  const chartData = JSON.parse(localStorage.getItem("chartData")) || [];
  const data = useLoaderData();
  const bookedDoctorIds =
    JSON.parse(localStorage.getItem("bookedDoctors")) || [];

  const [bookedDoctors, setBookedDoctors] = useState(
    data.filter((doctor) => bookedDoctorIds.includes(doctor.id))
  );

  const handleCancel = (id) => {
    const updatedIds = bookedDoctorIds.filter((doctorId) => doctorId !== id);
    localStorage.setItem("bookedDoctors", JSON.stringify(updatedIds));
    const updatedChartData = chartData.filter((entry) => entry.id !== id);
    localStorage.setItem("chartData", JSON.stringify(updatedChartData));
    const cancelledDoctor = bookedDoctors.find((doctor) => doctor.id === id);
    toast.success(
      `Appointment removed with ${cancelledDoctor?.name} successfully!`
    );

    setBookedDoctors((prev) => prev.filter((doctor) => doctor.id !== id));
  };

  return (
    <div className="mt-20 mb-20">
      <div className="flex justify-center items-center bg-white mb-20 rounded-2xl shadow">
        <BarCharts data={chartData} />
      </div>

      <TextHeader
        title="My Booked Appointments"
        description="Here's a list of all your scheduled doctor appointments."
      />

      {bookedDoctors.length === 0 ? (
        <div className="flex flex-col justify-center items-center mb-20">
          <p className="mb-4 text-red-500 text-lg te">
            You don't have any appointments.
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-2 bg-[#176AE5] text-white rounded-full shadow hover:bg-[#077d27] transition duration-200"
          >
            Book an Appointment
          </Link>
        </div>
      ) : (
        bookedDoctors.map((doctor) => (
          <div
            key={doctor.id}
            className="card text-neutral-content w-full mt-20 bg-white shadow"
          >
            <div className="card-body items-center text-center">
              <h2 className="card-title text-[#141414] text-2xl">
                My Today Appointments
              </h2>

              <div className="card-actions w-full flex justify-between mt-4">
                <div className="text-left">
                  <p className="text-[#0F0F0F] text-xl font-semibold">
                    {doctor.name}
                  </p>
                  <p className="text-sm text-[#0F0F0F99]">
                    {doctor.specialities}
                  </p>
                </div>
                <div className="text-right text-[#0F0F0F99] text-sm">
                  <p>Appointment Fee: {doctor.consultation_fee} Taka + VAT</p>
                </div>
              </div>

              <Button
                label="Cancel Appointment"
                className="w-full mt-5 !text-black border border-[#FF0000] bg-transparent hover:bg-[#FF0000]"
                onClick={() => handleCancel(doctor.id)}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BookingList;
