import React, { useEffect, useState } from "react";
import "./Funds.css";
import axios from "axios";

const Funds = () => {
  const [amount, setAmount] = useState();
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");
  const [balance, setBalance] = useState(0);

  // Fetching current balance from the backend when component mounts
  useEffect(() => {
    const getBalance = async () => {
      try {
        const res = await axios.get('https://trade-bazaar-backend.vercel.app/users/get-margin', { withCredentials: true });
        console.log("Current balance:", res.data.margin);
        setBalance(res.data.margin);  
      } catch (error) {
        console.log("Error fetching balance", error);
      }
    };

    getBalance();
  }, []); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && paymentMethod) {
      const newBalance = balance + parseFloat(amount);  
      setBalance(newBalance);  
      addFunds(newBalance);  
      alert(`Successfully added ₹${amount} via ${paymentMethod}`);
      setAmount(0); 
    } else {
      alert("Please fill out all the fields.");
    }
  };

  const addFunds = async (updatedBalance) => {
    try {
      // Sending the updated balance to the server to save it
      const resp = await axios.post('https://trade-bazaar-backend.vercel.app/users/add-funds', { updatedBalance }, { withCredentials: true });
      console.log("New Balance Saved: ", updatedBalance);
      console.log("Response from backend: ", resp);
    } catch (error) {
      console.log("Error in adding funds", error);
    }
  };

  return (
    <div className="container-fluid p-5 fontstyle">
      <div className="row justify-content-center">
        <div className="col-md-9">
          <div className="funds-container p-4 border shadow-sm rounded bg-white" style={{ maxWidth: "600px", width: "100%" }}>
            <h2 className="text-center mb-4 text-primary">Add Funds</h2>
            
            {/* Current Balance */}
            <div className="current-balance mb-4">
              <h4>
                <i className="fa fa-wallet" style={{ marginRight: "8px", fontSize: "1.5rem" }}></i>
                Current Balance: ₹{balance}
              </h4>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group mb-4">
                <label htmlFor="amount" className="form-label">Enter Amount (₹):</label>
                <input
                  type="number"
                  id="amount"
                  className="form-control"
                  value={amount}
                  min={1000}
                  max={100000}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  required
                  style={{ borderRadius: "0.375rem" }}
                />
              </div>

              <div className="form-group mb-4">
                <label htmlFor="payment-method" className="form-label">Payment Method:</label>
                <select
                  id="payment-method"
                  className="form-control"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  required
                  style={{ borderRadius: "0.375rem" }}
                >
                  <option value="Credit Card">Credit Card</option>
                  <option value="Debit Card">Debit Card</option>
                  <option value="UPI">UPI</option>
                  <option value="Net Banking">Net Banking</option>
                </select>
              </div>

              <div className="summary mb-4">
                <h3>Summary</h3>
                <p>Amount: ₹{amount || "0"}</p>
                <p>Payment Method: {paymentMethod}</p>
              </div>

              <button
                type="submit"
                className="btn btn-success w-100"
                style={{
                  borderRadius: "0.375rem",
                  transition: "background-color 0.3s",
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = "#28a745a1"}
                onMouseOut={(e) => e.target.style.backgroundColor = "#28a745"}
              >
                Add Funds
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;
