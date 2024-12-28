import React from 'react'
import LeftPanel from './components/leftSection/leftPanel'
import RightPanel from './components/rightSection/RightPanel'

const Wrapper = () => {
  return (
    <>
        <div className='container-fluid py-4 fontstyle' style={{backgroundColor:'rgb(239, 229, 229)'}}>
            <div className='row '>
               <div className='col-md-4'>
                <LeftPanel />
               </div>

               <div className='col-md-8'>
                <RightPanel />
               </div>
            </div>
        </div>
    </>
  )
}

export default Wrapper