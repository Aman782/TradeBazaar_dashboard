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
  const [count, setCount] = useState(0);

  
  // Fetching data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        console.log("Getting data in dashboard component: ", searchText);
        // const url =
        //   `https://api.marketstack.com/v1/eod?access_key=701f8701ff102c0b247db9b8bd3027a6&symbols=${searchText}.XNSE`;
        // const response = await fetch(url);
        // const result = await response.json();
        // console.log(result.data.close);

        setPrice(count);

        setCount((pre)=> pre+1);

        // Assuming the response contains 'data' with 'date' and 'close' price
        const labels = result.data.map((item) => item.date); // Extract dates for the x-axis
        const data = result.data.map((item) => item.close); // Extract close prices for the y-axis

        // Set the chart data
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
  }, [searchText]);

  return (
    <div className="container-fluid fontstyle">
      <div className="row">
        <div className="col-md-12">
          {chartData && Object.keys(chartData).length > 0 && (
            <Line data={chartData} />
          )}
        </div>
      </div>
{/* 
      <div className="row d-flex justify-content-center align-items-center p-5">
        <div className="col-md-2">
           <button className="btn btn-lg btn-primary">Buy</button>
        </div>  

        <div className="col-md-2">
          <button className="btn btn-lg btn-dark">Sell</button>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
