import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className='container-fluid fontstyle bg-dark'>
        <div className='row d-flex align-items-center justify-content-between p-3'>
          <div className='col-md-3 d-flex justify-content-evenly align-items-center'>
            <Link to='/dashboard' className='fs-4 fw-bold text-decoration-none text-white'>
              TradeBazaar <i className="fa-solid fa-arrow-trend-up"></i>
            </Link>
          </div>

          <div className='col-md-7 d-flex justify-content-evenly align-items-center'>
            {/* External Home Link */}
            <a href='https://example.com' className='fs-5 text-decoration-none text-white' target='_blank' rel='noopener noreferrer'>
              Home <i className="fa-solid fa-house"></i>
            </a>

            <Link to='/dashboard' className='fs-5 text-decoration-none text-white'>
              DashBoard <i className="fa-solid fa-table-columns"></i>
            </Link>

            <Link to='/orders' className='fs-5 text-decoration-none text-white'>
              Orders <i className="fa-regular fa-credit-card"></i>
            </Link>

            <Link to='/holdings' className='fs-5 text-decoration-none text-white'>
              Holdings <i className="fa-solid fa-hand-holding-dollar"></i>
            </Link>

            <Link to='/funds' className='fs-5 text-decoration-none text-white'>
              Funds <i className="fa-regular fa-money-bill-1"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
