import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Day", "Receivables", "Expenses"],
  ["Mon", 1000, 400],
  ["Thu", 1170, 460],
  ["Wed", 660, 1120],
  ["Thu", 1030, 540],
  ["Fri", 1000, 400],
  ["Sat", 1170, 460],
  ["Sun", 660, 1120],
];

export const options = {
  // title: "Projected Cash Flow",
  hAxis: { title: "Day", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "50%", height: "70%" },
};

const AreaChart = () => {
  return (
    <Chart
      chartType="AreaChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

export default AreaChart;

