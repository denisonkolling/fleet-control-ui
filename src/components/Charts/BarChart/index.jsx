import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["", "In Stock", "Departures", "Ordered"],
  ["Miami", 27000, 15000, 5000],
  ["New York", 11700, 9600, 2500],
  ["San Francisco", 6600, 11200, 3000],
  ["Ohio", 10300, 5400, 3500],
];

export const options = {
  chart: {
    // title: "Company Performance",
    // subtitle: "Sales, Expenses, and Profit: 2014-2017",
  },
};

const BarChart = () => {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

export default BarChart;
