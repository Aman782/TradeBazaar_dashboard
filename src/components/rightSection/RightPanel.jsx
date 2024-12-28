import React from 'react';
import Dashboard from './Dashboard';
import { FaUser, FaWallet } from 'react-icons/fa';

const RightPanel = () => {
  return (
    <div className='container-fluid p-4 rounded-3 border' style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      {/* Greeting and Equity Section */}
      <div className='row align-items-center mb-4'>
        {/* User Greeting */}
        <div className='col-md-6'>
          <div className='d-flex align-items-center'>
            <FaUser size={36} className='me-3 text-primary' />
            <p className='fs-3 mb-0 fw-bold text-dark'>Hi, User</p>
          </div>
        </div>

        {/* Total Equity */}
        <div className='col-md-6'>
          <div className='card shadow-sm border-0 rounded-4 p-3' style={{ backgroundColor: '#ffffff' }}>
            <h5 className='fw-bold text-primary mb-3'>
              <FaWallet className='me-2' /> Total Equity
            </h5>
            <p className='text-muted mb-1'>Margin Available: <span className='fw-bold text-dark'>3.74k</span></p>
            <p className='text-muted'>Opening Balance: <span className='fw-bold text-dark'>0</span></p>
          </div>
        </div>
      </div>

      {/* Dashboard Section */}
      <div className='row'>
        <div className='col-12'>
          <div className='card shadow-sm border-0 rounded-4 p-3' style={{ backgroundColor: '#ffffff' }}>
            <h5 className='fw-bold text-primary mb-3'>Performance Overview</h5>
            <Dashboard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
