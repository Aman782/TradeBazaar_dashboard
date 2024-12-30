import React from 'react'
import LeftPanel from './components/leftSection/leftPanel'
import RightPanel from './components/rightSection/RightPanel'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Funds from './components/rightSection/Funds'

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
                  </Routes>
                </BrowserRouter>   
               </div>
            </div>
        </div>
    </>
  )
}

export default Wrapper