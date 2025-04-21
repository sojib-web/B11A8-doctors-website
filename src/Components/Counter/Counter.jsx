// @ts-nocheck
import React from "react";
import TextHeader from "../TextHeader/TextHeader";

import CounterCard from "./CounterCard";

const Counter = ({ doctors }) => {
  console.log(doctors);
  return (
    <div className="mt-20">
      <TextHeader
        title="We Provide Best Medical Services"
        description="Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. "
      />

      <div className="">
        <CounterCard doctors={doctors} />
      </div>
    </div>
  );
};

export default Counter;
