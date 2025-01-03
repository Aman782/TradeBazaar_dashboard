import React, { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

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

const Dashboard = ({ searchText, setPrice }) => {
  const [chartData, setChartData] = useState({});
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!searchText) return;

        //  const url =
        //   `https://api.marketstack.com/v1/eod?access_key=b924e4c619206dfcd5a6e075d29da9e6&symbols=${searchText}.XNSE`;
        // const response = await fetch(url);
        // const result = await response.json();
        // console.log(result.data[0].close);

        // Set the latest stock price
        setPrice(result.data[0].close);

        // Prepare chart data
        const labels = result.data.map((item) => item.date);
        const data = result.data.map((item) => item.close);

        const dataForChart = {
          labels: labels,
          datasets: [
            {
              label: `${searchText} Stock Price (Close)`,
              data: data,
              borderColor: "rgba(75, 192, 192, 1)",
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              fill: true,
            },
          ],
        };
        setChartData(dataForChart);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchText, setPrice]);

  return (
    <div className="container-fluid fontstyle">
      <div className="row">
        <div className="col-md-12">
          {chartData && Object.keys(chartData).length > 0 && (
            <Line data={chartData} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
