import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Orders.css'; // For custom styling

const Orders = () => {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        let user = await axios.get('http://localhost:8080/users/get-margin', { withCredentials: true });
        console.log(user);
        setUserInfo(user.data.holdings.reverse());
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <div className='container mt-4 fontstyle'>
      <h2 className='text-center mb-4'>Your Orders</h2>
      <div className='d-flex flex-column gap-3'>
        {Array.isArray(userInfo) && userInfo.map((order, index) => (
          <div key={index} className='card order-card shadow-sm p-3'>
            <div className='d-flex justify-content-between align-items-center'>
              <div><strong>Stock:</strong> {order.stockName}</div>
              <div><strong>Quantity:</strong> {order.quantity}</div>
              <div><strong>Purchase Price:</strong> ₹{order.purchasePrice.toFixed(2)}</div>
              <div><strong>Total Spend:</strong> ₹{(order.quantity * order.purchasePrice).toFixed(2)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
