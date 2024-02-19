import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Ready to Load", 11],
  ["Maintenance", 2],
  ["Delaied", 2],
  ["On Time", 2],
  ["Rest", 7],
];

export const options = {
  // title: "My Daily Activities",
  pieHole: 0.4,
  is3D: false,
};

 const DonutChart = () => {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

export default DonutChart;