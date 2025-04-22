// @ts-nocheck

import React, { useState } from "react";
import TextHeader from "../TextHeader/TextHeader";
import { Link, useLoaderData } from "react-router-dom";
import Button from "../Botton/Button";
import toast from "react-hot-toast";

const BookingList = () => {
  const data = useLoaderData();
  const bookedDoctorIds =
    JSON.parse(localStorage.getItem("bookedDoctors")) || [];
  const [bookedDoctors, setBookedDoctors] = useState(
    data.filter((doctor) => bookedDoctorIds.includes(doctor.id))
  );

  const handleCancel = (id) => {
    const updatedIds = bookedDoctorIds.filter((doctorId) => doctorId !== id);
    localStorage.setItem("bookedDoctors", JSON.stringify(updatedIds));

    const cancelledDoctor = bookedDoctors.find((doctor) => doctor.id === id);
    toast.success(
      `Appointment removed with ${cancelledDoctor?.name} successfully!`
    );
    setBookedDoctors((prev) => prev.filter((doctor) => doctor.id !== id));
  };

  return (
    <div className="mt-20">
      <TextHeader
        title={`My Booked Appointments`}
        description={`Here's a list of all your scheduled doctor appointments.`}
      />

      {bookedDoctors.length === 0 ? (
        <div className=" mx-auto items-center min-h-screen">
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

              <Link> </Link>
              <div className="card-actions w-full flex justify-between mt-4">
                <div>
                  <button className="text-[#0F0F0F] text-xl text-start">
                    {doctor.name}
                    <p className="text-sm text-[#0F0F0F99]">
                      {doctor.specialities}
                    </p>
                  </button>
                </div>
                <button className="text-[#0F0F0F99] text-sm rounded-2xl">
                  <p>Appointment Fee : {doctor.consultation_fee} Taka + Vat</p>
                </button>
              </div>

              <Button
                label="Cancel Appointment"
                className="w-full mt-5 !text-black border border-[#FF0000] bg-transparent hover:bg-[#FF0000] "
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
