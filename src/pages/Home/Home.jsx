import React from "react";
import Hero from "../../Components/Hero/Hero";
import DoctorsContainer from "../../Components/DoctorsContainer/DoctorsContainer";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Hero></Hero>
      <DoctorsContainer DoctorsData={data} />
    </div>
  );
};

export default Home;
