import React from "react";
import { BarChart, Bar, XAxis, YAxis, Cell } from "recharts";

const CustomBarShape = (props) => {
  const { x, y, width, height, fill } = props;

  const points = [
    { x: x + width / 2, y },
    { x: x, y: y + height },
    { x: x + width, y: y + height },
  ];

  return (
    <polygon
      points={points.map((point) => `${point.x},${point.y}`).join(" ")}
      fill={fill}
    />
  );
};

const BarCharts = ({ data }) => {
  return (
    <div className="overflow-hidden">
      <div className="p-5">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Patient Statistics by Doctor
        </h2>
      </div>
      <div className="flex justify-center items-center">
        <BarChart width={600} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="uv" fill="red" shape={<CustomBarShape />} />
        </BarChart>
      </div>
    </div>
  );
};

export default BarCharts;
