import axios from 'axios';
import { useEffect, useState } from 'react';
import './Orders.css'; // For custom styling

const Holdings = () => {
  const [holdingsInfo, setHoldingsInfo] = useState([]);
  const [stockPrice, setStockPrice] = useState(0);
  const [qty, setQty] = useState(0);
  const [stockName, setStockName] = useState('');


  useEffect(() => {
    const fetchHoldingsInfo = async () => {
      try {
        let response = await axios.get('https://trade-bazaar-backend.vercel.app/users/get-margin', { withCredentials: true });
        console.log(response);
        setHoldingsInfo(response.data.holdings);
      } catch (error) {
        console.error("Error fetching holdings info:", error);
      }
    };

    fetchHoldingsInfo();
  }, []);

  const handleSell = (stockName) => {
    try {
      alert(`Selling ${stockName}`);
      setStockName(stockName);
      handleFetchPrice(stockName);
    } catch (error) {
      alert("Error while fetching....", error);
    } 
  };

  const handleFetchPrice = async(stockName) =>{
     try {
       const url =
           `https://api.marketstack.com/v1/eod?access_key=38778fd04543532b459d5770ed5f7983&symbols=${stockName}.XNSE`;
         const response = await fetch(url);
         const result = await response.json();
         console.log(result.data[0].close);
 
         setStockPrice(result.data[0].close);
     } catch (error) {
       console.log("API Fetch Failed!", error);
     }
  }

  const updateHoldings = async(e) =>{
    e.preventDefault();
    try {
      let selledStockMargin = qty * stockPrice;
  
      const data = {
        selledStockMargin,
        stockName,
        qty,
      }
  
      const updatedUserInfo = await axios.post('https://trade-bazaar-backend.vercel.app/users/stock-sell', data, {withCredentials: true});
  
      console.log(updatedUserInfo);
      setQty(0);
      setStockPrice(0);
    } catch (error) {
      console.log("Error In updateHoldings!", error);
    }
  }


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
      

     

      {/* //popup logic  */}
      
      <div className='container-fluid p-3'> 
         <div className='row'>
            <div className='col-md-12'>
                 <form onSubmit={updateHoldings}>
                    <div className='m-2'>
                      <label className='form-label'>Quantity of Stock</label>
                      <input className='form-control' placeholder='enter qty' onChange={(e)=> setQty(e.target.value)}></input>
                    </div>

                    <div className='m-2'>
                      <label className="form-label">Price</label>
                      <input className='form-control' value={stockPrice} readOnly></input>
                    </div>

                    <div className='m-2'>
                      <button className='btn btn-dark'>Proceed To Sell</button>
                    </div>
                  
                 </form>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Holdings;
