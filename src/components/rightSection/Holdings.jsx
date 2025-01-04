import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Orders.css'; // For custom styling

const Holdings = () => {
  const [holdingsInfo, setHoldingsInfo] = useState([]);

  useEffect(() => {
    const fetchHoldingsInfo = async () => {
      try {
        let response = await axios.get('http://localhost:8080/users/get-margin', { withCredentials: true });
        console.log(response);
        setHoldingsInfo(response.data.holdings);
      } catch (error) {
        console.error("Error fetching holdings info:", error);
      }
    };

    fetchHoldingsInfo();
  }, []);

  const handleSell = (stockName) => {
    alert(`Selling ${stockName}`);
    // Add sell logic here, such as making an API call
  };

  return (
    <div className='container mt-4'>
      <h2 className='text-center mb-4'>Your Holdings</h2>
      <div className='d-flex flex-column gap-3'>
        {Array.isArray(holdingsInfo) && holdingsInfo.map((holding, index) => (
          <div key={index} className='card holding-card shadow-sm p-3'>
            <div className='d-flex justify-content-between align-items-center'>
              <div><strong>Stock:</strong> {holding.stockName}</div>
              <div><strong>Quantity:</strong> {holding.quantity}</div>
              <div><strong>Purchase Price:</strong> ₹{holding.purchasePrice.toFixed(2)}</div>
              <div><strong>Total Spend:</strong> ₹{(holding.quantity * holding.purchasePrice).toFixed(2)}</div>
              <button 
                className='btn btn-danger' 
                onClick={() => handleSell(holding.stockName)}
              >
                Sell
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Holdings;
