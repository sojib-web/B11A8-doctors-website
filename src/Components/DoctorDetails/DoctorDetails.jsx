// @ts-nocheck
import React from "react";
import TextHeader from "../TextHeader/TextHeader";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import Button from "../Botton/Button";
import toast from "react-hot-toast";
import { TbCircleLetterR } from "react-icons/tb";
const DoctorDetails = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  const { id } = useParams();

  const handleBooking = () => {
    const bookedDoctors =
      JSON.parse(localStorage.getItem("bookedDoctors")) || [];

    if (bookedDoctors.includes(parseInt(id))) {
      toast.error(`Already booked ${name}!`);
    } else {
      bookedDoctors.push(parseInt(id));
      localStorage.setItem("bookedDoctors", JSON.stringify(bookedDoctors));

      // Chart update logic
      const chartData = JSON.parse(localStorage.getItem("chartData")) || [];

      const existingEntry = chartData.find((entry) => entry.name === name);
      if (existingEntry) {
        existingEntry.uv += 1;
      } else {
        chartData.push({
          id: parseInt(id),
          name: name,
          uv: 1,
          pv: 0, // you can set this as needed
          amt: 0, // you can set this as needed
        });
      }

      localStorage.setItem("chartData", JSON.stringify(chartData));

      toast.success(`Appointment scheduled with ${name} successfully!`);
      navigate(`/my_booking`);
    }
  };

  const singleDoctor = data.find((doctor) => doctor.id === parseInt(id));

  const {
    name,
    image,
    specialities,
    workplace,
    education,
    registration_number,
    availability,
    consultation_fee,
  } = singleDoctor;
  return (
    <div className="mt-20 mb-20">
      <TextHeader
        title={`Doctor’s Profile Details`}
        description={`Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.`}
      />

      <div className="flex flex-col w-full overflow-hidden bg-white rounded-2xl shadow lg:flex-row">
        <div className="relative lg:w-1/2 overflow-hidden p-8">
          <div className="rounded-2xl overflow-hidden">
            <img
              src={image}
              alt=""
              className="object-cover w-full h-80 lg:h-full"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
          <div>
            <p className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
              {name}
            </p>
          </div>
          <p className="mb-5 text-gray-800">
            <span className="font-bold">Specialities : </span>
            {specialities}
          </p>
          <p className="mb-5 text-gray-800">
            <span className="font-bold">Registration No : </span>
            {registration_number}
          </p>
          <p className="mb-5 text-gray-800">
            <span className="font-bold">Education : </span>
            {education}
          </p>

          <p className=" mb-5 text-gray-800">
            <span className="font-bold">Working at : </span>
            {workplace}
          </p>
          <p className="mb-5 text-gray-800">
            <span className="font-bold">Consultation Fee: </span>
            {consultation_fee}
          </p>
          <div className="divider m-2 p-0"></div>
          <div className="mt-4 space-y-2">
            <h3 className="text-lg font-semibold text-gray-800">Available:</h3>
            <div className="flex gap-2 flex-wrap">
              {availability.map((day, index) => (
                <button
                  key={index}
                  className="px-4 py-2 bg-[#FFA0001A] text-[#FFA000] rounded-full text-sm hover:bg-[#09982F] hover:text-white transition duration-200"
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center mt-5"></div>
        </div>
      </div>

      <div className="card text-neutral-content w-full mt-20 bg-white shadow">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-[#141414] text-2xl">
            Book an Appointment
          </h2>

          <div className="card-actions w-full flex justify-between mt-4">
            <button className="text-[#0F0F0F] text-xl">Availability</button>
            <button className="btn bg-[#09982F1A] text-[#09982F] rounded-2xl">
              Doctor Available Today
            </button>
          </div>
          <div className="w-full text-left flex gap-3 items-center">
            <TbCircleLetterR size={18} className="text-[#FFA000]" />
            <button className=" text-[#FFA000]">
              Due to high patient volume, we are currently accepting
              appointments for today only. We appreciate your understanding and
              cooperation.
            </button>
          </div>

          <Button
            onClick={handleBooking}
            label="Book Appointment Now"
            className="w-full mt-5"
          />
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
