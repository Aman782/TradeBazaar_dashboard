import React, { useEffect, useRef, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [chartData, setChartData] = useState({});
  const chartRef = useRef(null);

  // Fetching data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          'https://api.marketstack.com/v1/eod?access_key=701f8701ff102c0b247db9b8bd3027a6&symbols=TCS.XNSE';
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);

        // Assuming the response contains 'data' with 'date' and 'close' price
        const labels = result.data.map(item => item.date); // Extract dates for the x-axis
        const data = result.data.map(item => item.close); // Extract close prices for the y-axis

        // Set the chart data
        const dataForChart = {
          labels: labels,
          datasets: [
            {
              label: 'TCS Stock Price (Close)',
              data: data,
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              fill: true,
            },
          ],
        };
        setChartData(dataForChart);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        {chartData && Object.keys(chartData).length > 0 && (
          <Line data={chartData} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
