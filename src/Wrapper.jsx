import React, { useState } from 'react'
import LeftPanel from './components/leftSection/leftPanel'
import RightPanel from './components/rightSection/RightPanel'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Funds from './components/rightSection/Funds'
import Orders from './components/rightSection/Orders'
import Holdings from './components/rightSection/Holdings'

const Wrapper = () => {

  return (
    <>
        <div className='container-fluid py-4 fontstyle' style={{backgroundColor:'rgb(239, 229, 229)'}}>
            <div className='row '>
               <div className='col-md-4'>
                <LeftPanel />
               </div>

               <div className='col-md-8'>
                <BrowserRouter>
                  <Routes>
                    <Route path='/' element={<RightPanel />} />
                    <Route path='/funds' element={<Funds />} />
                    <Route path='/orders' element={<Orders />} />
                    <Route path='/holdings' element={<Holdings />} />
                  </Routes>
                </BrowserRouter>   
               </div>
            </div>
        </div>
    </>
  )
}

export default Wrapper