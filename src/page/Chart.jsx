import React from "react";
import { Pie } from "react-chartjs-2";
import {Chart , ArcElement} from 'chart.js';
import {Charts} from "chart.js/auto";
import { FormattedMessage } from "react-intl";
const PieChart = () => {
  const pieChartData = {
    labels: ["total monthly income of The Remedial Centre.", "total monthly rent of The Remedial Centre", 
    "total monthly income of The Husain Remedies","total monthly rent of The Husain Remedies","donations of Trustees and family and friends of PILL Remedial and Husain Remedies"],
    datasets: [{
      data: [1,5,0.5,5,88.5],
      backgroundColor: ["#2FDE00", "#00A6B4", "#ff6600","#FFC37D","#E91E63"],
      hoverBackgroundColor: ["#175000", "#003350", "#993d00","#FF5733","#D35400"],
    }]
  };
  Chart.register(ArcElement);
  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      }
    }
  };

  return (
    <div style={{ height: "500px", width: "500px" }}>
      <Pie  width={500} height={500} data={pieChartData} options={options}/>
    </div>
  );
};

export default PieChart;

