import React, { useEffect, useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto'; // Import Chart from Chart.js version 3

const DoughnutChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const chartInstance = chartRef.current.chartInstance;

      // Update the chart data
      chartInstance.data.datasets = data.datasets;
      chartInstance.update();
    }
  }, [data]);

  return (
    <div>
      <Doughnut ref={chartRef} data={data} options={{}} /> {/* Provide necessary options */}
    </div>
  );
};

export default DoughnutChart;
