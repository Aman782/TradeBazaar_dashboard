import React, { useEffect, useState } from "react";
import "./Funds.css";
import axios from "axios";

const Funds = () => {
  const [amount, setAmount] = useState();
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");
  const [balance, setBalance] = useState(0); 

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

  const addFunds = async(updatedBalance)=>{
    try {
      const resp = await axios.post('http://localhost:8080/users/add-funds', {updatedBalance}, {withCredentials: true});

      console.log("New Balance: ", updatedBalance);
      console.log("resp: ", resp);
    } catch (error) {
      console.log("Invalid Access or Request!", error);
    }
  }


  return (
    <div className="container-fluid p-5 fontstyle">
      <div className="row justify-content-center">
        <div className="col-md-9"> {/* Takes 7 out of 12 columns on medium screens */}
          <div className="funds-container p-4 border shadow-sm rounded bg-white" style={{ maxWidth: "600px", width: "100%" }}>
            <h2 className="text-center mb-4 text-primary">Add Funds</h2>
            
            {/* Current Balance */}
            <div className="current-balance mb-4">
              <h4>
                <i className="fa fa-wallet" style={{ marginRight: "8px", fontSize: "1.5rem" }}></i>
                Current Balance: ₹{balance.toFixed(2)}
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
