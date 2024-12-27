import React from "react";
import ListCard from "./ListCard";
import './Watchlist.css';

const Watchlist = () => {
  const stocks = [
    { id: 1, text: "INFY", percent: "-1.60%", price: "1555.45", PL: "red" },
    { id: 2, text: "ONGC", percent: "-0.09%", price: "116.8", PL: "red" },
    { id: 3, text: "TCS", percent: "-0.25%", price: "3194.8", PL: "red" },
    { id: 4, text: "KPITTECH", percent: "3.54%", price: "266.45", PL: "green" },
    { id: 5, text: "QUICKHEAL", percent: "-0.15%", price: "308.55", PL: "red" },
    { id: 6, text: "WIPRO", percent: "0.32%", price: "577.75", PL: "green" },
    { id: 7, text: "M&M", percent: "-0.01%", price: "779.8", PL: "red" },
    { id: 8, text: "RELIANCE", percent: "1.44%", price: "2112.4", PL: "green" },
    { id: 9, text: "HUL", percent: "1.04%", price: "512.4", PL: "green" },
  ];
  return (
    <>
      <div className="container-fluid p-3 fontstyle">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex justify-content-around align-items-center">
              <p className="fs-6 fw-semibold">NIFTY50</p>
              <p className="fs-6 fw-semibold">SENSEX</p>
            </div>

            <div className="scroll-container">
              {stocks.map((item) => (
                <ListCard
                  key={item.id}
                  stock_name={item.text}
                  percent={item.percent}
                  price={item.price}
                  PL={item.PL}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Watchlist;
