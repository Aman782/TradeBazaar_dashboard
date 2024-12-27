import React from 'react'
import LeftPanel from './components/leftSection/leftPanel'
import RightPanel from './components/rightSection/RightPanel'

const Wrapper = () => {
  return (
    <>
        <div className='container-fluid'>
            <div className='row'>
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