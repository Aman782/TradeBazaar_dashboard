import React, { useEffect, useState } from 'react';
import Dashboard from './Dashboard';
import { FaUser, FaWallet } from 'react-icons/fa';
import axios from 'axios';

const RightPanel = () => {
  const [searchText, setSearchText] = useState('');
  const [inputText, setInputText] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [qty, setQty] = useState('');
  const [price, setPrice] = useState(0); // Price fetched from API
  const [currAvailableMargin, setAvailableMargin] = useState(0);

  useEffect(()=>{
    const fetchMargin = async()=>{
      try {     
        const resp = await axios.post('http://localhost:8080/users/get-margin', {});
        
        console.log(resp);
        setAvailableMargin(resp.margin);
      } catch (error) {
        console.log(error);
      }
    } 

    fetchMargin();
  }, [])

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setSearchText(inputText);
  };

  const toggleModal = () => {
    if (!price) {
      alert('Please wait, fetching stock price...');
      return;
    }
    setIsModalOpen(!isModalOpen);
    setQty('');
  };

  const handleOnPurchase = async()=>{
    try {
      const res = await axios.post('http://localhost:8080/users/buy-stock', {searchText, qty, price}, {withCredentials: true});
      console.log(res);
      
    } catch (error) {
      console.log(error);
    }
     
  }

  const handleProceed = () => {
    if (qty && price) {
      alert(`You are buying ${qty} stocks at ₹${price} each.`);
      handleOnPurchase();
      toggleModal(); // Close the modal after proceeding
    } else {
      alert('Please fill in both fields!');
    }
  };

  return (
    <div className='container-fluid p-4 rounded-3 border' style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      {/* Greeting and Equity Section */}
      <div className='row align-items-center mb-4'>
        <div className='col-md-6'>
          <div className='d-flex align-items-center'>
            <FaUser size={36} className='me-3 text-primary' />
            <p className='fs-3 mb-0 fw-bold text-dark'>Hi, User</p>
          </div>
        </div>

        <div className='col-md-6'>
          <div className='card shadow-sm border-0 rounded-4 p-3' style={{ backgroundColor: '#ffffff' }}>
            <h5 className='fw-bold text-primary mb-3'>
              <FaWallet className='me-2' /> Total Equity
            </h5>
            <p className='text-muted mb-1'>Margin Available: <span className='fw-bold text-dark'>{currAvailableMargin}</span></p>
            <p className='text-muted'>Opening Balance: <span className='fw-bold text-dark'>0</span></p>
          </div>
        </div>
      </div>

      {/* Dashboard Section */}
      <div className='row'>
        <div className='col-12'>
          <div className='card shadow-sm border-0 rounded-4 p-3' style={{ backgroundColor: '#ffffff' }}>
            <div className='d-flex justify-content-between align-items-center mb-3'>
              <h5 className='fw-bold text-primary'>Performance Overview</h5>
              <form onSubmit={handleOnSubmit} className='d-flex' style={{ maxWidth: '300px', width: '100%' }}>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Search...'
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
                <button type='submit' className='btn btn-primary ms-2'>
                  Enter
                </button>
              </form>
            </div>
            <Dashboard searchText={searchText} setPrice={setPrice} />
            <button className='btn btn-success mt-3' onClick={toggleModal}>
              Buy
            </button>
          </div>
        </div>
      </div>

      {/* Modal Section */}
      {isModalOpen && (
        <div className='modal d-flex align-items-center justify-content-center' style={modalStyles}>
          <div className='modal-content p-4 rounded shadow' style={{ backgroundColor: '#ffffff', width: '400px' }}>
            <h5 className='mb-3'>Buy Stocks</h5>
            <div className='mb-3'>
              <label className='form-label'>Quantity of Stock</label>
              <input
                type='number'
                className='form-control'
                value={qty}
                onChange={(e) => setQty(e.target.value)}
                min='1'
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Price of Stock</label>
              <input
                type='number'
                className='form-control'
                value={price}
                min='1'
                readOnly
              />
            </div>
            <div className='d-flex justify-content-end'>
              <button className='btn btn-secondary me-2' onClick={toggleModal}>
                Cancel
              </button>
              <button className='btn btn-primary' onClick={handleProceed}>
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const modalStyles = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: '1050',
};

export default RightPanel;
