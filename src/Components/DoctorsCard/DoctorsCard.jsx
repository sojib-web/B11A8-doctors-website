import React from "react";
import { TbCircleLetterR } from "react-icons/tb";
import { Link } from "react-router-dom";

const DoctorsCard = ({ doctor }) => {
  const {
    image,
    registration_number,
    name,
    education,
    experience,
    Available,
    id,
  } = doctor;
  return (
    <div>
      <div className="card  bg-[#FFFFFF] w-full shadow-sm rounded-2xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Doctor"
            className="rounded-xl w-full h-70 object-cover"
          />
        </figure>

        <div className="card-body  ">
          <div className="flex gap-5">
            <button className="btn bg-[#09982F33] text-[#09982F] rounded-2xl">
              {Available}
            </button>
            <button className="btn text-[#176AE5] bg-[#176AE533] rounded-2xl">
              {experience} Experience
            </button>
          </div>
          <div>
            <h2 className="card-title">{name}</h2>
            <p>{education}</p>
            <div className="divider m-2 p-0"></div>

            <div className="flex gap-2  items-center mb-3">
              <TbCircleLetterR size={18} />
              <p>Registration No: {registration_number}</p>
            </div>
          </div>
          <div className="card-actions">
            <Link to={`doctorDetails/${id}`}>
              <button className="bg-transparent hover:bg-blue-500 w-full text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-2xl">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsCard;
