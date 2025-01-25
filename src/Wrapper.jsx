
import React from 'react';
import LeftPanel from './components/leftSection/LeftPanel';
import RightPanel from './components/rightSection/RightPanel';
import { Route, Routes } from 'react-router-dom';
import Funds from './components/rightSection/Funds';
import Orders from './components/rightSection/Orders';
import Holdings from './components/rightSection/Holdings';
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



const Wrapper = () => {
  return (
    <>
      <div className='container-fluid py-4 fontstyle' style={{ backgroundColor: 'rgb(239, 229, 229)' }}>
        <div className='row'>
          <div className='col-md-4'>
            <LeftPanel />
          </div>

          <div className='col-md-8'>
            <Routes>
              <Route path='/dashboard' element={<RightPanel />} />
              <Route path='/funds' element={<Funds />} />
              <Route path='/orders' element={<Orders />} />
              <Route path='/holdings' element={<Holdings />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wrapper;
