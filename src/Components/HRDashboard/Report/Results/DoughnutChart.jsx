import React, { useEffect, useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';

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
