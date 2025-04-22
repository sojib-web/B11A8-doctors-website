import React from "react";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

const BarCharts = ({ data }) => {
  return (
    <div className="flex justify-center items-center">
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="uv" fill="red" />
      </BarChart>
    </div>
  );
};

export default BarCharts;
